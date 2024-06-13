import React, { ComponentProps } from "react";
import * as S from "./styles";

export interface IStatusProps extends ComponentProps<"p"> {
  textcolor: string;
}

export const Status = (props: IStatusProps) => {
  return <S.MyStatus {...props} />;
};
