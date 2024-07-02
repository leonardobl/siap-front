import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ISelectOptions } from "../../../../Types/inputs";
import { Profissional } from "../../../../Services/Profissional";
import { useForm, Controller } from "react-hook-form";
import { IAgendamentoAgendarFormProps } from "../../../../Types/agendamento";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  diaAgendado: z
    .string({ message: "Campo obrigatorio" })
    .min(1, "Campo obrigatorio"),
  horaAgendada: z
    .string({ message: "Campo obrigatorio" })
    .min(1, "Campo obrigatorio"),
  uuid: z.string({ message: "Campo obrigatorio" }).min(1, "Campo obrigatorio"),
});

export const useFormSchedule = () => {
  const [date, setDate] = useState<Date | null>(null);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IAgendamentoAgendarFormProps>({
    defaultValues: {
      diaAgendado: "",
      horaAgendada: "",
    },
    resolver: zodResolver(schema),
  });

  const getOptions = async (txt: string): Promise<ISelectOptions[]> => {
    return Profissional.list({ nome: txt }).then(({ data }) =>
      data.content.map((i) => ({ value: i.uuid, label: i.nome, element: i }))
    );
  };
  return {
    getOptions,
    date,
    setDate,
    errors,
    Controller,
    control,
    handleSubmit,
  };
};
