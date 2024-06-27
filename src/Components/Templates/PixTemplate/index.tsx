import React from "react";
import { LayoutTemplate } from "../LayoutTemplate";
import * as S from "./styles";
import { Button } from "../../Atoms/Button";
import { PaymentCodContainer } from "../../Atoms/PaymentCodContainer";
import { v4 } from "uuid";
import { usePix } from "./usePix";

export const PixTemplate = () => {
  const {} = usePix();

  return (
    <LayoutTemplate titleHeader="Pagamento PIX">
      <S.Container>
        <S.Card>
          <div>
            <h2>
              Efetue o pagamento com o <span>QR CODE</span> gerado abaixo. Caso
              esteja no celular <span>copie o PIX</span>. Abra o app do banco de
              sua escolha e cole na área destinada ao{" "}
              <span>“PIX Copia e Cola”</span>.
            </h2>
          </div>

          <div>
            <img src="/assets/img/qrcode.png" alt="pix" />
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
