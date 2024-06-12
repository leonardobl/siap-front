import React from "react";
import { useForm } from "react-hook-form";
import { IServicoForm } from "../../../../Types/servicos";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  nome: z.string().optional(),
});

export const useFormServiceRegister = () => {
  const { register, handleSubmit, reset } = useForm<IServicoForm>({
    defaultValues: {
      nome: "",
    },
    resolver: zodResolver(schema),
    mode: "all",
  });
  return { register, handleSubmit, reset };
};
