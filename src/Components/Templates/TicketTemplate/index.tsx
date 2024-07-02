import React from "react";
import { LayoutTemplate } from "../LayoutTemplate";
import * as S from "./styles";
import { Button } from "../../Atoms/Button";
import { PaymentCodContainer } from "../../Atoms/PaymentCodContainer";
import { useTicket } from "./useTicket";

export const TicketTemplate = () => {
  const { fatura } = useTicket();

  return (
    <LayoutTemplate titleHeader="Pagamento BOLETO">
      <S.Container>
        <S.Card>
          <div>
            <h2>
              Efetue pagamento scaneando{" "}
              <strong>o código de barras gerado</strong> abaixo. Caso esteja no
              celular <strong>copie o código</strong> de barras, abra o app do
              banco de sua escolha e cole na área destinada ao{" "}
              <strong>“Pagar boleto por código de barras”</strong>.
            </h2>
          </div>

          <div>
            <img src={fatura?.boleto?.barCode} alt="boleto" />
          </div>

          <div>
            <p>
              Valor: <span>${fatura?.valorTotal}</span>
            </p>
          </div>

          <div>
            <PaymentCodContainer value={fatura?.boleto?.barCodeData} />
          </div>

          <div>
            <Button variant="blue">Ver Fatura</Button>
          </div>
        </S.Card>

        <S.Info>
          <p>
            <span>*</span>Seu agendamento só será realizado após a{" "}
            <strong>confirmação do pagamento</strong>.
          </p>
        </S.Info>
      </S.Container>
    </LayoutTemplate>
  );
};
