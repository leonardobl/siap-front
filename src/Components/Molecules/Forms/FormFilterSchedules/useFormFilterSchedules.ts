import { zodResolver } from "@hookform/resolvers/zod";
import React, { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { StatusAgendamentoEnum } from "../../../../Enum/statusAgendamento";
import { removeUnderscore } from "../../../../Utils/removeUnderscore";
import { IAgendamentoProps } from "../../../../Types/agendamento";
import { useLocation } from "react-router-dom";
import { ISelectOptions } from "../../../../Types/inputs";

const StatusOptions = Object.values(StatusAgendamentoEnum).map((i) => ({
  value: i,
  label: removeUnderscore(i),
}));

const schema = z.object({
  clienteNomeCpf: z.string().optional(),
  profissionalNomeCpf: z.string().optional(),
  status: z.string().optional(),
  dataInicial: z.string().optional(),
  dataFinal: z.string().optional(),
  prestadorNomeCnpj: z.string().optional(),
});

export const useFormFilterSchedules = () => {
  const { pathname } = useLocation();
  const [dateIni, setDateIni] = useState<Date | null>(null);
  const [dateFim, setDateFim] = useState<Date | null>(null);
  const { register, handleSubmit, control, reset } = useForm<IAgendamentoProps>(
    {
      resolver: zodResolver(schema),
      defaultValues: {
        clienteNomeCpf: "",
        profissionalNomeCpf: "",
        status: "",
        dataInicial: "",
        dataFinal: "",
        prestadorNomeCnpj: "",
      },
    }
  );

  useEffect(() => {
    reset();
  }, [pathname]);

  function handleReset() {
    setDateIni(null);
    setDateFim(null);
  }

  return {
    register,
    handleSubmit,
    Controller,
    control,
    StatusOptions,
    reset,
    pathname,
    dateIni,
    setDateIni,
    dateFim,
    setDateFim,
    handleReset,
  };
};
