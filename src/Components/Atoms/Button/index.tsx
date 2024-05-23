import React, { ComponentProps } from "react";
import * as S from "./styles";

interface IButtonProps extends ComponentProps<"button"> {
  iconLeft?: string;
}

export const Button = (props: IButtonProps) => {
  return (
    <S.MyButton {...props}>
      {props?.iconLeft && <img src={props.iconLeft} alt="icone" />}
      {props?.children}
    </S.MyButton>
  );
};
