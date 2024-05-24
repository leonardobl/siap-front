import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { maskCnpj, maskCpf } from "../../../Utils/masks";

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
    watch,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      cpfCnpj: "",
      senha: "",
    },
    resolver: zodResolver(schema),
    mode: "onSubmit",
  });

  useEffect(() => {
    if (watch("cpfCnpj")?.length > 14) {
      const result = maskCnpj(watch("cpfCnpj"));
      setValue("cpfCnpj", result);

      return;
    }
    const result = maskCpf(watch("cpfCnpj"));
    setValue("cpfCnpj", result);
  }, [watch("cpfCnpj")]);

  return { handleSubmit, register, errors };
};
