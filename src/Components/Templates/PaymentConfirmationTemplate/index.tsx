import React from "react";
import * as S from "./styles";
import { LayoutTemplate } from "../LayoutTemplate";
import { Button } from "../../Atoms/Button";
import { usePaymentConfirmation } from "./usePaymentConfirmation";

export const PaymentConfirmationTemplate = () => {
  const { navigate, id } = usePaymentConfirmation();
  return (
    <LayoutTemplate titleHeader="Confirmação do Pagamento">
      <S.Container>
        <h4>
          <img src="/assets/svg/icon-check-green.svg" alt="icone check" />{" "}
          Pagamento Confirmado!
        </h4>

        <Button
          variant="blue"
          onClick={() => navigate(`/novo-agendamento/agendamento?id=${id}`)}
        >
          Realizar Agendamento
        </Button>
      </S.Container>
    </LayoutTemplate>
  );
};
