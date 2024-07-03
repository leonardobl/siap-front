import React, { useCallback, useEffect, useState } from "react";
import { ISelectOptions } from "../../../../Types/inputs";
import { Prestador } from "../../../../Services/Prestador";
import { Servico } from "../../../../Services/Servico";
import { z } from "zod";
import { useForm, Controller } from "react-hook-form";
import { IAgendamentoCadastroFormRHF } from "../../../../Types/agendamento";
import { zodResolver } from "@hookform/resolvers/zod";
import { Cidade } from "../../../../Services/Cidades";

const schema = z.object({
  uuidCliente: z.string().optional(),
  uuidPrestador: z.string().min(1, "Campo obrigatorio"),
  uuidServico: z.string().min(1, "Campo obrigatorio"),
  cidade: z.string().min(1, "Campo obrigatorio"),
});

export const useFormNewSchedule = () => {
  const [servicosOptions, setServicosOptions] = useState<ISelectOptions[]>(
    [] as ISelectOptions[]
  );
  const [cidadeOptions, setCidadesOptions] = useState<ISelectOptions[]>(
    [] as ISelectOptions[]
  );

  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IAgendamentoCadastroFormRHF>({
    resolver: zodResolver(schema),
    defaultValues: {
      uuidCliente: "",
      uuidPrestador: "",
      uuidServico: "",
      cidade: "",
    },
    mode: "onBlur",
  });

  const getCidades = useCallback(() => {
    Cidade.get().then(({ data }) => {
      const options = data.content.map((i) => ({
        value: i.nome,
        label: i.nome,
      }));
      setCidadesOptions(options);
    });
  }, []);

  const loadPrestadores = async (text: string): Promise<ISelectOptions[]> => {
    return Prestador.list({ nome: text, cidade: watch("cidade") }).then(
      ({ data }) =>
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
    getCidades();
  }, []);

  return {
    loadPrestadores,
    servicosOptions,
    control,
    handleSubmit,
    errors,
    Controller,
    cidadeOptions,
    watch,
  };
};
