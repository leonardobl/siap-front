import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { IFaturaDTO } from "../../../Types/fatura";
import { useContextSite } from "../../../Context/Context";
import { Agendamento } from "../../../Services/Agendamento";
import { toast } from "react-toastify";
import { StatusAgendamentoEnum } from "../../../Enum/statusAgendamento";

export const usePix = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const { setIsLoad } = useContextSite();
  const [fatura, setFatura] = useState<IFaturaDTO>({} as IFaturaDTO);

  const getAgendamento = useCallback(() => {
    Agendamento.getById(id)
      .then(({ data }) => {
        setFatura(data.fatura);
        if (data.status === StatusAgendamentoEnum.PAGO) {
          navigate(`/novo-agendamento/pagamento/confirmacao?id=${id}`);
        }
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
      setIsLoad(true);
      getAgendamento();
    }
  }, [id]);

  useEffect(() => {
    const interval = setInterval(() => {
      getAgendamento();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return { fatura };
};
