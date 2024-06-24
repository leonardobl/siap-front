import React from "react";
import { useForm } from "react-hook-form";
import { ITipoPrestadorProps } from "../../../../Types/tipoPrestador";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  nome: z.string().min(1, "Campo obrigatorio"),
});

export const useFormFilterProviderType = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ITipoPrestadorProps>({
    defaultValues: {
      nome: "",
    },
    resolver: zodResolver(schema),
  });

  return { register, handleSubmit, reset, errors };
};
