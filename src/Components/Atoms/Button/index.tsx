import React from "react";
import * as S from "./styles";
import { IButtonProps } from "../../../Types/button";

export const Button = (props: IButtonProps) => {
  return (
    <S.MyButton {...props}>
      {props?.iconLeft && <img src={props.iconLeft} alt="icone" />}
      {props?.children}
    </S.MyButton>
  );
};
