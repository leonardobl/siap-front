import React from "react";
import { useNavigate } from "react-router-dom";
import { IAgendamentoCadastroForm } from "../../../Types/agendamento";
import { Agendamento } from "../../../Services/Agendamento";
import { useContextSite } from "../../../Context/Context";
import { toast } from "react-toastify";
import { useLocalStorage } from "../../../Hooks/useSessionStorage";

export const useNewSchedule = () => {
  const navigate = useNavigate();
  const { setIsLoad } = useContextSite();
  const [dataUser] = useLocalStorage("dataUser");

  function handleSubmit(data: IAgendamentoCadastroForm) {
    const PAYLOAD: IAgendamentoCadastroForm = {
      uuidPrestador: data.uuidPrestador,
      uuidServico: data.uuidServico,
      uuidCliente: dataUser?.cliente?.uuid,
    };

    setIsLoad(true);
    Agendamento.post(PAYLOAD)
      .then(({ data }) => {
        navigate(`/novo-agendamento/servico/detalhe?id=${data?.uuid}`);
      })
      .catch(
        ({
          response: {
            data: { mensagem },
          },
        }) => toast.error(mensagem)
      )
      .finally(() => {
        setIsLoad(false);
      });
  }
  return { handleSubmit };
};
