import React from "react";
import { IAgendamentoAgendarFormProps } from "../../../Types/agendamento";
import { Agendamento } from "../../../Services/Agendamento";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useContextSite } from "../../../Context/Context";

export const useSchedule = () => {
  const navigate = useNavigate();
  const { setIsLoad } = useContextSite();

  function handleSubmit(data: IAgendamentoAgendarFormProps) {
    console.log(data);

    // PARA O MEU EU DO FUTURO
    // const PAYLOAD: IAgendamentoAgendarFormProps = {
    //   ...rest,
    //   uuid: "DEVE IMPLEMENTAR"
    // }

    setIsLoad(true);
    Agendamento.put(data)
      .then(({ data }) => {
        navigate(`/novo-agendamento/agendamento/detalhe?id=${data.uuid}`);
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
