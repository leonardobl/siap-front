import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { StatusAgendamentoEnum } from "../../../../Enum/statusAgendamento";
import { removeUnderscore } from "../../../../Utils/removeUnderscore";

const StatusOptions = Object.values(StatusAgendamentoEnum).map((i) => ({
  value: i,
  label: removeUnderscore(i),
}));

const schema = z.object({});

export const useFormFilterSchedules = () => {
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  return {
    register,
    handleSubmit,
    errors,
    Controller,
    control,
    StatusOptions,
    reset,
  };
};
