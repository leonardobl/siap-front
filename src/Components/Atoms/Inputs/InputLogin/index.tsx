import React, { ComponentProps, useState } from "react";
import * as S from "./styles";

interface IInpurLoginProps extends ComponentProps<"input"> {
  iconLeft?: string;
}

export const InputLogin = React.forwardRef<HTMLInputElement, IInpurLoginProps>(
  (props: IInpurLoginProps, ref) => {
    const [eyeOpen, setEyeOpen] = useState(false);

    function handleTypeChange() {
      setEyeOpen((prev) => !prev);
    }

    return (
      <S.Label>
        {props?.iconLeft && (
          <img id="icon-left" src={props.iconLeft} alt="icone esquerdo" />
        )}
        <S.Input
          {...props}
          ref={ref}
          type={eyeOpen ? "text" : props.type}
          data-icon-left={!!props?.iconLeft}
        />
        {props.type === "password" ? (
          eyeOpen ? (
            <img
              id="icon-eye"
              src="/assets/svg/icon-eye-open.svg"
              alt="icone olho"
              onClick={handleTypeChange}
            />
          ) : (
            <img
              id="icon-eye"
              src="/assets/svg/icon-eye-close.svg"
              alt="icone olho"
              onClick={handleTypeChange}
            />
          )
        ) : null}
      </S.Label>
    );
  }
);
