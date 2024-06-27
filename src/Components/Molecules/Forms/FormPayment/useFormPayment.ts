import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
  payment: z.string().min(1, { message: "Você precisa selecionar uma opção" }),
});

export const useFormPayment = () => {
  const {
    formState: { errors },
    control,
    handleSubmit,
  } = useForm({
    defaultValues: {
      payment: "",
    },
    resolver: zodResolver(schema),
  });
  return { Controller, errors, control, handleSubmit };
};
