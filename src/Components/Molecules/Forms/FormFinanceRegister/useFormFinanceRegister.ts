import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { IDadosFinanceirosForm } from "../../../../Types/prestador";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { ISelectOptions } from "../../../../Types/inputs";

const schema = z.object({
  agencia: z.string().min(3, { message: "Campo obrigatorio" }),
  codigoBanco: z.string().min(1, { message: "Campo obrigatorio" }),
  conta: z.string().min(3, { message: "Campo obrigatorio" }),
  operacao: z.string().min(1, { message: "Campo obrigatorio" }),
});

export const useFormFinanceRegister = () => {
  const {
    control,
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<IDadosFinanceirosForm>({
    defaultValues: {
      agencia: "",
      codigoBanco: "",
      conta: "",
      operacao: "",
    },
    resolver: zodResolver(schema),
    mode: "all",
  });

  const [bancoOptions, setBancoOptions] = useState<ISelectOptions[]>(
    [] as ISelectOptions[]
  );

  return { Controller, errors, control, handleSubmit, register, bancoOptions };
};
