import React, { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { IContratoListProps } from "../../../../Types/contrato";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { maskCnpj } from "../../../../Utils/masks";

const schema = z.object({
  cnpj: z.string().optional().or(z.literal("")),
  dataFim: z.string().optional().or(z.literal("")),
  dataInicio: z.string().optional().or(z.literal("")),
  nome: z.string().optional().or(z.literal("")),
  servico: z.string().optional().or(z.literal("")),
  razaoSocial: z.string().optional().or(z.literal("")),
});

export const useFormFilterContracts = () => {
  const [dataInicial, setDataInicial] = useState(null);
  const [dataFinal, setDataFinal] = useState(null);

  const { register, control, handleSubmit, reset, watch, setValue } =
    useForm<IContratoListProps>({
      defaultValues: {
        cnpj: "",
        dataFim: "",
        dataInicio: "",
        nome: "",
        servico: "",
        razaoSocial: "",
      },
      mode: "all",
      resolver: zodResolver(schema),
    });

  useEffect(() => {
    setValue("cnpj", maskCnpj(watch("cnpj")) || "");
  }, [watch("cnpj")]);

  return {
    dataInicial,
    setDataInicial,
    dataFinal,
    setDataFinal,
    Controller,
    register,
    control,
    handleSubmit,
    reset,
  };
};
