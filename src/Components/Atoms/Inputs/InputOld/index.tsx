import React, { ComponentProps, useState } from "react";
import * as S from "./styles";

interface InputCustomProps extends ComponentProps<"input"> {
  label?: string;
  required?: boolean;
}

export const InputOld = React.forwardRef<HTMLInputElement, InputCustomProps>(
  ({ placeholder, ...rest }: InputCustomProps, ref) => {
    const [eyeOpen, setEyeOpen] = useState(false);

    function handleTypeChange() {
      setEyeOpen((prev) => !prev);
    }

    return (
      <S.Label htmlFor={rest.id}>
        {rest?.label && (
          <p>
            {rest?.label} {!!rest?.required && <span>*</span>}{" "}
          </p>
        )}

        <S.Input
          {...rest}
          type={eyeOpen ? "text" : rest.type}
          onWheel={(event) => event.currentTarget.blur()}
          required={false}
          ref={ref}
          placeholder=" "
        />
        {rest.type === "password" ? (
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
      </S.Label>
    );
  }
);
