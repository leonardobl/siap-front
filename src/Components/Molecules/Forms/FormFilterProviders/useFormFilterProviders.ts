import { zodResolver } from "@hookform/resolvers/zod";
import React, { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { IPrestadorProps } from "../../../../Types/prestador";
import { StatusEnum } from "../../../../Enum/status";
import { maskCnpj } from "../../../../Utils/masks";
import { ISelectOptions } from "../../../../Types/inputs";

const schema = z.object({
  nome: z.string().optional().or(z.literal("")),
  cnpj: z
    .string()
    .min(18, { message: "CNPJ invalido" })
    .optional()
    .or(z.literal("")),
  status: z.string().optional().or(z.literal("")),
  tipo: z.string().optional().or(z.literal("")),
  cidade: z.string().optional().or(z.literal("")),
});

const StatusOptions = Object.values(StatusEnum).map((item) => ({
  value: item,
  label: item,
}));

export const useFormFilterProviders = () => {
  const [cidadesOptions, setCidadesOptions] = useState<ISelectOptions[]>(
    [] as ISelectOptions[]
  );
  const [tipoOptions, setTipoOptions] = useState<ISelectOptions[]>(
    [] as ISelectOptions[]
  );

  const {
    register,
    control,
    reset,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<IPrestadorProps>({
    defaultValues: {
      cidade: "",
      cnpj: "",
      nome: "",
      status: "",
      tipo: "",
    },
    mode: "all",
    resolver: zodResolver(schema),
  });

  useEffect(() => {
    setValue("cnpj", maskCnpj(watch("cnpj")));
  }, [watch("cnpj")]);

  return {
    register,
    control,
    reset,
    handleSubmit,
    Controller,
    StatusOptions,
    errors,
    cidadesOptions,
    tipoOptions,
  };
};
