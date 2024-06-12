import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { IServicosListProps } from "../../../../Types/servicos";

const schema = z.object({
  nome: z.string().optional(),
});

export const useFormFilterServices = () => {
  const { register, handleSubmit, reset } = useForm<IServicosListProps>({
    defaultValues: {
      nome: "",
    },
    mode: "all",
    resolver: zodResolver(schema),
  });

  return { register, handleSubmit, reset };
};
