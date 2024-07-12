import React from "react";
import { useNavigate } from "react-router-dom";

import {
  IContratoCompletoFormRHF,
  IContratoForm,
} from "../../../Types/contrato";
import { Contrato } from "../../../Services/Contrato";
import { useContextSite } from "../../../Context/Context";
import { toast } from "react-toastify";

export const useContractRegister = () => {
  const navigate = useNavigate();
  const { setIsLoad } = useContextSite();

  function handleSubmit(data: IContratoCompletoFormRHF) {
    setIsLoad(true);

    const PAYLOAD: IContratoForm = {
      dataFinal: data.dataFinal,
      dataInicial: data.dataInicial,
      uuidPrestador: data.uuidPrestador,
      servicosContratados: data?.servicos?.map((i) => ({
        uuidServico: i.value,
        valor: i.valor,
      })),
    };

    Contrato.post(PAYLOAD)
      .then(() => {
        navigate("/contratos");
      })
      .catch(
        ({
          response: {
            data: { mensagem },
          },
        }) => toast.error(mensagem)
      )
      .finally(() => setIsLoad(false));
  }
  return { handleSubmit };
};
