import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { maskCnpj, maskCpf } from "../../../Utils/masks";
import { IAutenticacaoForm } from "../../../Types/autenticacao";

const schema = z.object({
  cpfCNPJ: z
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
  } = useForm<IAutenticacaoForm>({
    defaultValues: {
      cpfCNPJ: "",
      senha: "",
    },
    resolver: zodResolver(schema),
    mode: "onSubmit",
  });

  useEffect(() => {
    if (watch("cpfCNPJ")?.length > 14) {
      const result = maskCnpj(watch("cpfCNPJ"));
      setValue("cpfCNPJ", result);

      return;
    }
    const result = maskCpf(watch("cpfCNPJ"));
    setValue("cpfCNPJ", result);
  }, [watch("cpfCNPJ")]);

  return { handleSubmit, register, errors };
};
