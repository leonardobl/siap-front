import React from "react";
import CurrencyInput, { CurrencyInputProps } from "react-currency-input-field";
import * as S from "./styles";

export interface IInputMoneyProps extends CurrencyInputProps {
  label?: string;
}

export const InputMoney = (props: IInputMoneyProps) => {
  return (
    <S.Container>
      <CurrencyInput
        {...props}
        // decimalsLimit={2}
        required={false}
        placeholder={props.placeholder || ""}
        intlConfig={{ locale: "pt-BR", currency: "BRL" }}
        fixedDecimalLength={2}
        decimalScale={2}
      />
      {props?.label && (
        <S.MyLabel htmlFor={props?.name}>
          {props?.label}
          {props?.required && <span id="asterisk">*</span>}
        </S.MyLabel>
      )}
    </S.Container>
  );
};
