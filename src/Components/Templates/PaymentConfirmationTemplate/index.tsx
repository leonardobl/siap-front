import React from "react";
import * as S from "./styles";
import { LayoutTemplate } from "../LayoutTemplate";
import { Button } from "../../Atoms/Button";
import { usePaymentConfirmation } from "./usePaymentConfirmation";
import { v4 } from "uuid";

export const PaymentConfirmationTemplate = () => {
  const { navigate } = usePaymentConfirmation();
  return (
    <LayoutTemplate titleHeader="Confirmação do Pagamento">
      <S.Container>
        <h4>
          <img src="/assets/svg/icon-check-green.svg" alt="icone check" />{" "}
          Pagamento Confirmado!
        </h4>

        <Button
          variant="blue"
          onClick={() => navigate(`/novo-agendamento/agendamento?id=${v4()}`)}
        >
          Realizar Agendamento
        </Button>
      </S.Container>
    </LayoutTemplate>
  );
};
