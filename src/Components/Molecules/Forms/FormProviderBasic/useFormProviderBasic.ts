import React, { useCallback, useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { IPrestadorForm } from "../../../../Types/prestador";
import { zodResolver } from "@hookform/resolvers/zod";
import { maskCep, maskCnpj, maskPhone } from "../../../../Utils/masks";
import { Ibge } from "../../../../Services/Ibge";
import { ISelectOptions } from "../../../../Types/inputs";
import { toast } from "react-toastify";
import { ViaCep } from "../../../../Services/ViaCep";
import { useContextSite } from "../../../../Context/Context";

const TipoOptions = [{ value: "Tipo1", label: "Tipo1" }];

const schemaCidade = z.object({
  nome: z.string().min(1, { message: "Campo obrigatorio" }),
});

const schemaEndereco = z.object({
  bairro: z.string().min(1, { message: "Campo obrigatorio" }),
  cep: z.string().min(9, { message: "Cep invalido" }),
  cidade: schemaCidade,
  complemento: z.string().optional().or(z.literal("")),
  logradouro: z.string().min(1, { message: "Campo obrigatorio" }),
  numero: z.string().optional(),
  uf: z.string().min(1, { message: "Campo obrigario" }),
});

const schemaForm = z.object({
  cnpj: z
    .string({ message: "Campo obrigatorio" })
    .min(18, { message: "CNPJ invalido" }),
  email: z
    .string()
    .min(1, { message: "Campo obrigatorio" })
    .email({ message: "Email invalido" }),
  endereco: schemaEndereco,
  inscEstadual: z.string().optional().or(z.literal("")),
  inscMunicipal: z.string().optional().or(z.literal("")),
  nome: z.string().min(5, { message: "campo obrigatorio" }),
  razaoSocial: z.string().min(1, { message: "campo obrigatorio" }),
  telefone: z.string().min(14, { message: "Telefone invalido" }),
  tipoNome: z.string().min(1, { message: "campo obrigatorio" }),
});

export const useFormProviderBasic = () => {
  const [ufOptions, setUfOptions] = useState<ISelectOptions[]>(
    [] as ISelectOptions[]
  );
  const [cidadeTemp, setCidadeTemp] = useState("");
  const { setIsLoad } = useContextSite();
  const [cidadesOptions, setCidadesOptions] = useState<ISelectOptions[]>([]);

  const {
    control,
    formState: { errors },
    register,
    handleSubmit,
    watch,
    setValue,
  } = useForm<IPrestadorForm>({
    defaultValues: {
      cnpj: "",
      email: "",
      inscEstadual: "",
      inscMunicipal: "",
      nome: "",
      razaoSocial: "",
      telefone: "",
      tipoNome: "",
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
    resolver: zodResolver(schemaForm),
    mode: "all",
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
    setValue("cnpj", maskCnpj(watch("cnpj")));
  }, [watch("cnpj")]);

  useEffect(() => {
    setValue("telefone", maskPhone(watch("telefone")));
  }, [watch("telefone")]);

  return {
    Controller,
    control,
    errors,
    register,
    handleSubmit,
    TipoOptions,
    cidadesOptions,
    ufOptions,
    handleCep,
  };
};
