import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Agendamento } from "../../../Services/Agendamento";
import { FormaDePagamentoEnum } from "../../../Enum/formaDePagamento";
import { toast } from "react-toastify";
import { useContextSite } from "../../../Context/Context";

export const usePayment = () => {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const navigate = useNavigate();
  const { setIsLoad } = useContextSite();

  function handleSubmit({ payment }: { payment: string }) {
    setIsLoad(true);

    Agendamento.gerarFatura({
      uuidAgendamento: id,
      formaDePagamento: FormaDePagamentoEnum[payment.toUpperCase()],
    })
      .then(() => {
        navigate(`/novo-agendamento/pagamento/${payment}?id=${id}`);
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
  }

  return { handleSubmit };
};
