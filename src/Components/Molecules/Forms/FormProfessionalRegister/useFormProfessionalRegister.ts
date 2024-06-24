import React, { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { IProfissionalForm } from "../../../../Types/profissional";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { ISelectOptions } from "../../../../Types/inputs";
import { Ibge } from "../../../../Services/Ibge";
import { ConselhoEnum } from "../../../../Enum/conselho";
import { maskCpf, maskPhone } from "../../../../Utils/masks";
import { toast } from "react-toastify";

const schema = z.object({
  conselho: z.string().min(1, { message: "Campo obrigatorio" }),
  cpf: z.string().min(14, { message: "CPF invalido" }),
  email: z.string().email({ message: "Email invalido" }),

  nome: z.string().min(1, { message: "Campo obrigatorio" }),
  numeroConselho: z.string().min(1, { message: "Campo obrigatorio" }),
  telefone: z.string().min(14, { message: "Campo obrigatorio" }),
  ufConselho: z.string().min(1, { message: "Campo obrigatorio" }),
});

export const useFormProfessionalRegister = () => {
  const [ufOptions, setUfOptions] = useState<ISelectOptions[]>(
    [] as ISelectOptions[]
  );
  const conselhoOptions = Object.values(ConselhoEnum).map((i) => ({
    value: i,
    label: i,
  }));

  const {
    register,
    handleSubmit,
    control,
    setValue,
    watch,
    formState: { errors },
  } = useForm<IProfissionalForm>({
    resolver: zodResolver(schema),
    mode: "all",
    defaultValues: {
      conselho: "" as ConselhoEnum,
      cpf: "",
      email: "",
      nome: "",
      numeroConselho: "",
      telefone: "",
      ufConselho: "",
    },
  });

  useEffect(() => {
    Ibge.UFs()
      .then(({ data }) => {
        const options = data.map((item) => ({
          value: item.sigla,
          label: item.sigla,
          element: item,
        }));

        setUfOptions(options);
      })
      .catch(
        ({
          response: {
            data: { mensagem },
          },
        }) => toast.error(mensagem)
      );
  }, []);

  useEffect(() => {
    setValue("cpf", maskCpf(watch("cpf")));
  }, [watch("cpf")]);

  useEffect(() => {
    setValue("telefone", maskPhone(watch("telefone")));
  }, [watch("telefone")]);

  return {
    register,
    handleSubmit,
    Controller,
    errors,
    control,
    ufOptions,
    conselhoOptions,
  };
};
