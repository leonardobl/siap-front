import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { maskCpf, maskPhone } from "../../../../Utils/masks";
import { z } from "zod";
import { IClienteListPros } from "../../../../Types/cliente";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  nome: z.string().optional(),
  cpf: z.string().optional(),
  telefone: z.string().optional(),
  email: z
    .string()
    .email({ message: "Formato de email invalido" })
    .optional()
    .or(z.literal("")),
});

export const useFormFilterClient = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    setValue,
    formState: { errors },
  } = useForm<IClienteListPros>({
    resolver: zodResolver(schema),
    mode: "all",
  });

  useEffect(() => {
    if (watch("telefone")) setValue("telefone", maskPhone(watch("telefone")));
  }, [watch("telefone")]);

  useEffect(() => {
    if (watch("cpf")) setValue("cpf", maskCpf(watch("cpf")));
  }, [watch("cpf")]);

  return { register, handleSubmit, errors, reset };
};
