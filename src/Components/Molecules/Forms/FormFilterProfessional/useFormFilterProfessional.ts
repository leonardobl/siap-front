import React, { useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { IProfissionalListProps } from "../../../../Types/profissional";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { ConselhoEnum } from "../../../../Enum/conselho";
import { maskCpf } from "../../../../Utils/masks";

const schema = z.object({
  nome: z.string().optional(),
  cpf: z.string().optional(),
  conselho: z.string().optional(),
  numeroConselho: z.string().optional(),
});

export const useFormFilterProfessional = () => {
  const conselhoOptions = Object.values(ConselhoEnum).map((i) => ({
    value: i,
    label: i,
  }));
  const { register, control, reset, handleSubmit, watch, setValue } =
    useForm<IProfissionalListProps>({
      defaultValues: {
        conselho: "" as ConselhoEnum,
        cpf: "",
        nome: "",
        numeroConselho: "",
      },
      resolver: zodResolver(schema),
    });

  useEffect(() => {
    setValue("cpf", maskCpf(watch("cpf")));
  }, [watch("cpf")]);

  return {
    register,
    control,
    reset,
    handleSubmit,
    conselhoOptions,
    Controller,
  };
};
