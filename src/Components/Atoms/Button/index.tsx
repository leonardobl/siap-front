import React from "react";
import * as S from "./styles";
import { IButtonProps } from "../../../Types/button";

export const Button = (props: IButtonProps) => {
  return (
    <S.MyButton {...props}>
      {props?.iconleft && <img src={props.iconleft} alt="icone" />}
      {props?.children}
    </S.MyButton>
  );
};
