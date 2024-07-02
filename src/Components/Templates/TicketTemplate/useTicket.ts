import React, { useCallback, useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useContextSite } from "../../../Context/Context";
import { Agendamento } from "../../../Services/Agendamento";
import { toast } from "react-toastify";
import { IFaturaDTO } from "../../../Types/fatura";

export const useTicket = () => {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const { setIsLoad } = useContextSite();
  const [fatura, setFatura] = useState<IFaturaDTO>({} as IFaturaDTO);
  const navigate = useNavigate();

  const getAgendamento = useCallback(() => {
    setIsLoad(true);
    Agendamento.getById(id)
      .then(({ data }) => {
        setFatura(data.fatura);
      })
      .catch(
        ({
          response: {
            data: { mensagem },
          },
        }) => {
          toast.error(mensagem);
          setTimeout(() => {
            navigate(`/novo-agendamento/pagamento?id=${id}`);
          }, 2000);
        }
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

  return { fatura };
};
