import React, { useState } from "react";
import * as S from "./styles";
import { InputCustomProps } from "../../../../Types/inputs";

export const Input = React.forwardRef<HTMLInputElement, InputCustomProps>(
  (props: InputCustomProps, ref) => {
    const [eyeOpen, setEyeOpen] = useState(false);

    function handleTypeChange() {
      setEyeOpen((prev) => !prev);
    }

    return (
      <S.Container>
        {props.type === "password" ? (
          eyeOpen ? (
            <img
              src="/assets/svg/icon-eye-open.svg"
              alt="icone olho"
              onClick={handleTypeChange}
            />
          ) : (
            <img
              src="/assets/svg/icon-eye-close.svg"
              alt="icone olho"
              onClick={handleTypeChange}
            />
          )
        ) : null}

        {props?.iconleft && (
          <img src={props.iconleft} alt="icone" id="iconLeft" />
        )}
        <S.MyInput
          {...props}
          type={eyeOpen ? "text" : props.type}
          ref={ref}
          required={false}
          onWheel={(event) => event.currentTarget.blur()}
          placeholder={props.placeholder || ""}
        />
        {props?.label && (
          <S.MyLabel htmlFor={props.id}>
            {props.label}
            {props.required && <span id="asterisk">*</span>}
          </S.MyLabel>
        )}

        {props?.iconright && (
          <img src={props.iconright} alt="icone" id="iconRight" />
        )}
      </S.Container>
    );
  }
);
