import React, { useState } from "react";
import * as S from "./styles";
import {
  IoEyeOffOutline,
  IoEyeOffSharp,
  IoEyeOutline,
  IoEyeSharp,
} from "react-icons/io5";

interface InputCustomProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  required?: boolean;
}

export const Input = React.forwardRef<HTMLInputElement, InputCustomProps>(
  (props: InputCustomProps, ref) => {
    const [eyeOpen, setEyeOpen] = useState(false);

    function handleTypeChange() {
      setEyeOpen((prev) => !prev);
    }

    return (
      <S.Container>
        {props.label && (
          <S.Label $isRequired={!!props.required} htmlFor={props.id}>
            {props.label}
            <span>*</span>
          </S.Label>
        )}

        <S.Input
          $typeInput={props.type}
          {...props}
          type={eyeOpen ? "text" : props.type}
          onWheel={(event) => event.currentTarget.blur()}
          required={false}
          ref={ref}
        />
        {props.type === "password" ? (
          eyeOpen ? (
            <IoEyeOutline onClick={handleTypeChange} />
          ) : (
            <IoEyeOffOutline onClick={handleTypeChange} />
          )
        ) : null}
      </S.Container>
    );
  }
);
