import React from "react";
import { LayoutTemplate } from "../LayoutTemplate";
import * as S from "./styles";
import { Button } from "../../Atoms/Button";
import { PaymentCodContainer } from "../../Atoms/PaymentCodContainer";
import { v4 } from "uuid";

export const TicketTemplate = () => {
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
            <img src="/assets/img/barcode.png" alt="pix" />
          </div>

          <div>
            <p>
              Valor: <span>R$0,00</span>
            </p>
          </div>

          <div>
            <PaymentCodContainer value={v4()} />
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
