import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { IServicoForm } from "../../../../Types/servico";

const schema = z.object({
  nome: z.string().min(1, { message: "Campo obrigatorio" }),
});

export const useFormServiceRegister = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IServicoForm>({
    defaultValues: {
      nome: "",
    },
    resolver: zodResolver(schema),
    mode: "all",
  });
  return { register, handleSubmit, reset, errors };
};
