import React, { ComponentProps, useState } from "react";
import * as S from "./styles";

interface InputCustomProps extends ComponentProps<"input"> {
  label?: string;
  required?: boolean;
}

export const Input = React.forwardRef<HTMLInputElement, InputCustomProps>(
  (props: InputCustomProps, ref) => {
    return (
      <S.Container>
        <S.MyInput {...props} ref={ref} placeholder={" "} />
        {props?.label && (
          <S.MyLabel htmlFor={props.id}>
            {props.label}
            {props.required && <span id="asterisk">*</span>}
          </S.MyLabel>
        )}
      </S.Container>
    );
  }
);
