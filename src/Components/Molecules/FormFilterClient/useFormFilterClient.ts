import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { maskPhone } from "../../../Utils/masks";

export const useFormFilterClient = () => {
  const { register, handleSubmit, watch, setValue } = useForm({});

  useEffect(() => {
    if (watch("telefone")) setValue("telefone", maskPhone(watch("telefone")));
  }, [watch("telefone")]);

  useEffect(() => {
    if (watch("cpf")) setValue("telefone", maskPhone(watch("telefone")));
  }, [watch("cpf")]);

  return { register, handleSubmit };
};
