import { zodResolver } from "@hookform/resolvers/zod";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { IUsuariosListProps } from "../../../../Types/usuario";
import { maskCnpj, maskCpf, maskPhone } from "../../../../Utils/masks";

const schema = z.object({
  cpfCnpj: z.string().optional(),
  email: z
    .string()
    .email({ message: "Email invalido" })
    .optional()
    .or(z.literal("")),
  nome: z.string().optional(),
  telefone: z.string().optional(),
});

export const useFormFilterUsers = () => {
  const {
    register,
    reset,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<IUsuariosListProps>({
    defaultValues: {
      cpfCnpj: "",
      email: "",
      nome: "",
      telefone: "",
    },
    resolver: zodResolver(schema),
  });

  useEffect(() => {
    if (watch("cpfCnpj")?.length > 14) {
      setValue("cpfCnpj", maskCnpj(watch("cpfCnpj")));
      return;
    }

    setValue("cpfCnpj", maskCpf(watch("cpfCnpj")));
  }, [watch("cpfCnpj")]);

  useEffect(() => {
    setValue("telefone", maskPhone(watch("telefone")));
  }, [watch("telefone")]);

  return { register, reset, errors, handleSubmit };
};
