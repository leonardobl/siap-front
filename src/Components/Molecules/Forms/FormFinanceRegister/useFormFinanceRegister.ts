import React, { useCallback, useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { IDadosFinanceirosForm } from "../../../../Types/prestador";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { ISelectOptions } from "../../../../Types/inputs";
import { Banco } from "../../../../Services/Banco";
import { useContextSite } from "../../../../Context/Context";
import { toast } from "react-toastify";

const schema = z.object({
  agencia: z.string().min(3, { message: "Campo obrigatorio" }),
  codigoBanco: z.string().min(1, { message: "Campo obrigatorio" }),
  conta: z.string().min(3, { message: "Campo obrigatorio" }),
  operacao: z.string().optional(),
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

  const { setIsLoad } = useContextSite();
  const [bancoOptions, setBancoOptions] = useState<ISelectOptions[]>(
    [] as ISelectOptions[]
  );

  const getbancos = useCallback(() => {
    setIsLoad(true);
    Banco.list()
      .then(({ data }) => {
        const options = data.content?.map((i) => ({
          value: i.codigo,
          label: i.nome,
          element: i,
        }));

        setBancoOptions(options);
      })
      .catch(
        ({
          response: {
            data: { mensagem },
          },
        }) => {
          toast.error(mensagem);
        }
      )
      .finally(() => {
        setIsLoad(false);
      });
  }, []);

  useEffect(() => {
    getbancos();
  }, []);

  return {
    Controller,
    errors,
    control,
    handleSubmit,
    register,

    bancoOptions,
  };
};
