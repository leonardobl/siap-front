import React, { useCallback, useEffect, useState } from "react";
import { ISelectOptions } from "../../../../Types/inputs";
import { Prestador } from "../../../../Services/Prestador";
import { Servico } from "../../../../Services/Servico";
import { z } from "zod";
import { useForm, Controller } from "react-hook-form";
import { IAgendamentoCadastroForm } from "../../../../Types/agendamento";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  uuidCliente: z.string().optional(),
  uuidPrestador: z.string().min(1, "Campo obrigatorio"),
  uuidServico: z.string().min(1, "Campo obrigatorio"),
});

export const useFormNewSchedule = () => {
  const [servicosOptions, setServicosOptions] = useState<ISelectOptions[]>(
    [] as ISelectOptions[]
  );

  const {
    control,
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<IAgendamentoCadastroForm>({
    resolver: zodResolver(schema),
    defaultValues: {
      uuidCliente: "",
      uuidPrestador: "",
      uuidServico: "",
    },
    mode: "onBlur",
  });

  const getPrestadores = async (text: string): Promise<ISelectOptions[]> => {
    return Prestador.list({ nome: text }).then(({ data }) =>
      data.content.map((i) => ({
        value: i.uuid,
        label: `${i.nome} - ${i.cnpj}`,
      }))
    );
  };

  const getServicos = useCallback(() => {
    Servico.list().then(({ data }) => {
      const options = data.content.map((i) => ({
        value: i.uuid,
        label: i.nome,
      }));
      setServicosOptions(options);
    });
  }, []);

  useEffect(() => {
    getServicos();
  }, []);

  return {
    getPrestadores,
    servicosOptions,
    control,
    handleSubmit,
    register,
    errors,
    Controller,
  };
};
