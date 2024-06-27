import React, { ComponentProps } from "react";
import * as S from "./stylest";
import { InputRadio } from "../../../Atoms/Inputs/InputRadio";
import { Button } from "../../../Atoms/Button";
import { useFormPayment } from "./useFormPayment";
import { ErrorMessage } from "../../../Atoms/ErrorMessage";

interface IFormPaymentProps extends ComponentProps<"form"> {
  submitForm: ({ payment }: { payment: string }) => void;
}

export const FormPayment = ({ submitForm, ...rest }: IFormPaymentProps) => {
  const { Controller, control, errors, handleSubmit } = useFormPayment();

  return (
    <S.Form {...rest} onSubmit={handleSubmit(submitForm)}>
      <div>
        <h3>
          Selecione uma forma de <span>pagamento</span> para prosseguir.
        </h3>
      </div>
      <div>
        <Controller
          control={control}
          name="payment"
          render={({ field: { onChange, value } }) => (
            <InputRadio
              data-error={!!errors.payment}
              imgPath="/assets/svg/icon-pix-gray.svg"
              label="PIX"
              id="pix"
              checked={value === "pix"}
              name="pagamento"
              onChange={() => {
                onChange("pix");
              }}
            />
          )}
        />

        <S.Label>Confirmado na hora!</S.Label>
      </div>

      <div>
        <Controller
          control={control}
          name="payment"
          render={({ field: { onChange, value } }) => (
            <InputRadio
              data-error={!!errors.payment}
              imgPath="/assets/svg/icon-barcode-gray.svg"
              label="BOLETO"
              id="Boleto"
              checked={value === "boleto"}
              name="pagamento"
              onChange={() => {
                onChange("boleto");
              }}
            />
          )}
        />
        <S.Label>
          Confirmado em até <span>3 dias úteis!</span>
        </S.Label>
      </div>

      <div>
        {errors?.payment && (
          <ErrorMessage>{errors.payment.message}</ErrorMessage>
        )}
      </div>

      <div>
        <Button variant="blue">Avançar</Button>
      </div>
    </S.Form>
  );
};
