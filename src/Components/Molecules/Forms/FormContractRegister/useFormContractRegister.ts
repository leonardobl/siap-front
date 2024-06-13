import React from "react";
import { useForm, Controller } from "react-hook-form";
import { IContratoCompletoForm } from "../../../../Types/contrato";

export const useFormContractRegister = () => {
  const {
    control,
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<IContratoCompletoForm>({});

  return { Controller, control, register, handleSubmit, setValue, errors };
};
