import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const schema = z.object({
  cpfCnpj: z
    .string({ message: "Campo obrigatorio" })
    .min(14, "CPF/CNPJ invalido"),
  senha: z.string({ message: "Campo obrigatorio" }).min(1, "Campo obrigatorio"),
});

export const useFormLogin = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    defaultValues: {
      cpfCnpj: "",
      senha: "",
    },
    resolver: zodResolver(schema),
    mode: "onSubmit",
  });

  return { handleSubmit, register, errors };
};
