import React, { useCallback, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Agendamento } from "../../../Services/Agendamento";
import { useContextSite } from "../../../Context/Context";
import { IAgendamentoDTO } from "../../../Types/agendamento";
import { toast } from "react-toastify";

export const useNewScheduleServiceDetail = () => {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const { setIsLoad } = useContextSite();
  const [agendamento, setAgendamento] = useState<IAgendamentoDTO>(
    {} as IAgendamentoDTO
  );

  const getAgendamento = useCallback(() => {
    setIsLoad(true);
    Agendamento.getById(id)
      .then(({ data }) => {
        setAgendamento(data);
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
  }, [id]);

  useEffect(() => {
    if (id) {
      getAgendamento();
    }
  }, [id]);

  return { agendamento };
};
