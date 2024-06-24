import React from "react";
import { useForm } from "react-hook-form";
import { ITipoPrestadorProps } from "../../../../Types/tipoPrestador";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  nome: z.string().optional(),
});

export const useFormFilterProviderType = () => {
  const { register, handleSubmit, reset } = useForm<ITipoPrestadorProps>({
    defaultValues: {
      nome: "",
    },
    resolver: zodResolver(schema),
  });

  return { register, handleSubmit, reset };
};
