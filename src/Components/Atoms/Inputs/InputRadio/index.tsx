import React, { ComponentProps } from "react";
import * as S from "./styles";

interface IInputRadioProps extends ComponentProps<"input"> {
  label: string;
  imgPath: string;
}

export const InputRadio = ({ label, imgPath, ...rest }: IInputRadioProps) => {
  return (
    <S.InpLabel htmlFor={rest.id}>
      <img src={imgPath} alt="icon" />
      <S.InpRadio {...rest} type="radio" />
      <span>{label}</span>
    </S.InpLabel>
  );
};
