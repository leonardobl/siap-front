import React, { useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { IClienteForm } from "../../../../Types/cliente";
import { useContextSite } from "../../../../Context/Context";
import { ISelectOptions } from "../../../../Types/inputs";
import { Ibge } from "../../../../Services/Ibge";
import { ViaCep } from "../../../../Services/ViaCep";
import { maskCep, maskCpf, maskPhone } from "../../../../Utils/masks";

interface IIClienteFormProps extends IClienteForm {
  confirmSenha: string;
}

const cidadeSchema = z.object({
  nome: z.string({ message: "Campo obrigatorio" }).min(1, "Campo obrigatorio"),
});

const enderecoSchema = z.object({
  bairro: z
    .string({ message: "Campo obrigatorio" })
    .min(1, "Campo obrigatorio"),
  cep: z.string({ message: "Campo obrigatorio" }).min(9, "Cep invalido"),
  cidade: cidadeSchema,
  complemento: z.string().optional(),
  logradouro: z
    .string({ message: "Campo obrigatorio" })
    .min(1, "Campo obrigatorio"),
  numero: z
    .string({ message: "Campo obrigatorio" })
    .min(1, "Campo obrigatorio"),
  uf: z.string({ message: "Campo obrigatorio" }).min(1, "Campo obrigatorio"),
});

const schema = z
  .object({
    cpf: z
      .string({ message: "Campo obrigatorio" })
      .min(14, "CPF/CNPJ invalido"),
    email: z
      .string({ message: "Campo obrigatorio" })
      .email("Email invalido")
      .optional(),
    nome: z
      .string({ message: "Campo obrigatorio" })
      .min(12, "Por favor preencha o nome completo"),
    senha: z
      .string({ message: "Campo obrigatorio" })
      .min(1, "Campo obrigatorio"),
    confirmSenha: z
      .string({ message: "Campo obrigatorio" })
      .min(1, "Campo obrigatorio"),
    telefone: z
      .string({ message: "Campo obrigatorio" })
      .min(14, "Telefone invalido")
      .optional()
      .or(z.literal("")),
    tipo: z.string().optional(),
    endereco: enderecoSchema,
  })
  .refine(({ confirmSenha, senha }) => confirmSenha === senha, {
    path: ["confirmSenha"],
    message: "As senhas não coferem",
  });

export const useFormUserRegister = () => {
  const [ufOptions, setUfOptions] = useState<ISelectOptions[]>([]);
  const { setIsLoad } = useContextSite();
  const [cidadesOptions, setCidadesOptions] = useState<ISelectOptions[]>([]);
  const [cidadeTemp, setCidadeTemp] = useState("");

  const {
    handleSubmit,
    watch,
    setValue,
    register,
    control,
    formState: { errors },
  } = useForm<IIClienteFormProps>({
    defaultValues: {
      cpf: "",
      email: "",
      nome: "",
      senha: "",
      confirmSenha: "",
      telefone: "",
      endereco: {
        bairro: "",
        cep: "",
        cidade: {
          nome: "",
        },
        complemento: "",
        logradouro: "",
        numero: "",
        uf: "",
      },
    },
    mode: "all",
    resolver: zodResolver(schema),
  });

  const getUfs = useCallback(() => {
    Ibge.UFs()
      .then(({ data }) => {
        const options = data.map((item) => ({
          value: item.sigla,
          label: item.sigla,
          element: item,
        }));

        setUfOptions(options);
      })
      .catch((erro) => toast.error("Erro ao requisitar as UFs"));
  }, []);

  useEffect(() => {
    getUfs();
  }, [getUfs]);

  function handleCep() {
    if (watch("endereco.cep").length === 9) {
      setIsLoad(true);
      setTimeout(() => {
        ViaCep.get(watch("endereco.cep"))
          .then(({ data }) => {
            setValue("endereco.logradouro", data.logradouro);
            setValue("endereco.bairro", data.bairro);
            // setValue("endereco.cidade", data.localidade);
            setValue("endereco.uf", data.uf);
            setCidadeTemp(data.localidade);
          })
          .catch((erro) => toast.error("Cep não encontrado"))
          .finally(() => setIsLoad(false));
      }, 1000);
    }
  }

  useEffect(() => {
    if (watch("endereco.uf")) {
      setValue("endereco.cidade.nome", "");
      Ibge.CidadesPorEstado({ sigla: watch("endereco.uf") })
        .then(({ data }) => {
          const options = data.map((item) => ({
            value: item.nome,
            label: item.nome,
            element: item,
          }));
          setCidadesOptions(options);
          setValue("endereco.cidade.nome", cidadeTemp);
        })
        .then(() => {
          setCidadeTemp("");
        })
        .catch((erro) => toast.error("Erro ao requisitar a lista de cidades"));
    }
  }, [watch("endereco.uf")]);

  useEffect(() => {
    setValue("endereco.cep", maskCep(watch("endereco.cep")));
  }, [watch("endereco.cep")]);

  useEffect(() => {
    const newvalue = maskCpf(watch("cpf"));
    setValue("cpf", newvalue);
  }, [watch("cpf")]);

  useEffect(() => {
    const newPhoneValue = maskPhone(watch("telefone"));
    setValue("telefone", newPhoneValue);
  }, [watch("telefone")]);

  return {
    handleSubmit,
    ufOptions,
    cidadesOptions,
    handleCep,
    Controller,
    control,
    register,
    errors,
    watch,
  };
};
