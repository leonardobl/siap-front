import React from "react";
import { useForm } from "react-hook-form";
import { ITipoPrestadorDTO } from "../../../../Types/tipoPrestador";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  nome: z.string().min(1, { message: "Campo Obrigatorio" }),
});

export const useFormProviderTypeRegister = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<ITipoPrestadorDTO>({
    defaultValues: {
      nome: "",
    },
    resolver: zodResolver(schema),
  });

  return { register, reset, handleSubmit, errors };
};
