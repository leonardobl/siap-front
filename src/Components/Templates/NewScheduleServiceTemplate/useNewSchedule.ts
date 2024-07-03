import React from "react";
import { useNavigate } from "react-router-dom";
import { IAgendamentoCadastroForm } from "../../../Types/agendamento";
import { Agendamento } from "../../../Services/Agendamento";
import { useContextSite } from "../../../Context/Context";
import { toast } from "react-toastify";

export const useNewSchedule = () => {
  const navigate = useNavigate();
  const { setIsLoad } = useContextSite();

  function handleSubmit(data: IAgendamentoCadastroForm) {
    // PARA O MEU EU DO FUTURO
    // const PAYLOAD: IAgendamentoCadastroForm = {
    //   ...data,
    //   uuidCliente: "PENDENTE DE IMPLEMENTACAO"
    // }

    console.log(data);
    return;

    setIsLoad(false);
    Agendamento.post(data)
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
