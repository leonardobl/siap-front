import React, { useCallback, useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { IContratoCompletoFormRHF } from "../../../../Types/contrato";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { ISelectOptions } from "../../../../Types/inputs";
import { Servico } from "../../../../Services/Servico";
import { toast } from "react-toastify";

const schema = z
  .object({
    dataFinal: z
      .string({ message: "Campo obrigatorio" })
      .min(1, { message: "Campo obrigatorio" }),
    dataInicial: z
      .string({ message: "Campo obrigatorio" })
      .min(1, { message: "Campo obrigatorio" }),
    uuidPrestador: z
      .string({ message: "Campo obrigatorio" })
      .min(1, { message: "Campo obrigatorio" }),
    servico: z.string({ message: "Campo obrigatório" }).optional(),
    valor: z.number().optional(),
    servicos: z
      .array(
        z.object({
          value: z.string(),
          valor: z.number(),
        })
      )
      .min(1, { message: "Você precisa adicionar pelo menos um serviço" }),
  })
  .superRefine((data, ctx) => {
    if (data.servicos.length === 0) {
      if (!data.servico) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ["servico"],
          message: "Campo obrigatório se não houver serviços adicionados",
        });
      }
      if (!data.valor || data.valor <= 0) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ["valor"],
          message: "Campo obrigatório se não houver serviços adicionados",
        });
      }
    }
  });

export const useFormContractRegister = () => {
  const {
    control,
    handleSubmit,
    getValues,
    setValue,
    trigger,
    watch,
    formState: { errors },
  } = useForm<IContratoCompletoFormRHF>({
    defaultValues: {
      dataFinal: "",
      dataInicial: "",
      servico: "",
      valor: 0,
      uuidPrestador: "",
      servicos: [],
    },
    resolver: zodResolver(schema),
  });

  const [dataIni, setDataIni] = useState<Date | null>(null);
  const [dataFim, setDataFim] = useState<Date | null>(null);
  const [servicosOptions, setServicosOptions] = useState<ISelectOptions[]>(
    [] as ISelectOptions[]
  );
  const [priceValue, setPriceValue] = useState("");

  const getServicos = useCallback(() => {
    Servico.list()
      .then(({ data }) => {
        const options = data.content.map((i) => ({
          value: i.uuid,
          label: i.nome,
        }));
        setServicosOptions(options);
      })
      .catch(
        ({
          response: {
            data: { mensagem },
          },
        }) => toast.error(mensagem)
      );
  }, []);

  useEffect(() => {
    getServicos();
  }, []);

  const onInsert = async () => {
    const { servicos } = getValues();
    if (servicos.length === 0) {
      const isValid = await trigger(["servico", "valor"]);
      if (!isValid) return;
    }

    const { servico, valor } = getValues();
    setValue("servicos", [...servicos, { value: servico, valor }]);
    setValue("servico", ""); // Reset the service field
    setValue("valor", 0); // Reset the value field
  };

  useEffect(() => {
    console.log(watch("servicos"));
  }, [watch("servicos")]);

  return {
    Controller,
    control,
    handleSubmit,
    errors,
    dataIni,
    setDataIni,
    dataFim,
    setDataFim,
    servicosOptions,
    onInsert,
    priceValue,
    setPriceValue,
  };
};
