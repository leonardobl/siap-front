import React, { ComponentProps } from "react";
import * as S from "./styles";
import { useFormLogin } from "./useFormLogin";
import { InputLogin } from "../../Atoms/Inputs/InputLogin";
import { ErrorMessage } from "../../Atoms/ErrorMessage";

interface IFormLoginProps extends ComponentProps<"form"> {
  submiteForm: (data) => void;
}

export const FormLogin = ({ submiteForm, ...rest }: IFormLoginProps) => {
  const { handleSubmit, register, errors } = useFormLogin();

  return (
    <S.MyFormLogin {...rest} onSubmit={handleSubmit(submiteForm)}>
      <img src="/assets/img/logo-siap-white.png" alt="logo siap" />

      <S.Grid>
        <div>
          <InputLogin
            {...register("cpfCnpj")}
            placeholder="CPF/CNPJ"
            iconLeft="/assets/svg/icon-avatar.svg"
            data-error={!!errors?.cpfCnpj?.message}
          />
          {errors?.cpfCnpj && (
            <ErrorMessage>{errors.cpfCnpj.message}</ErrorMessage>
          )}
        </div>

        <div>
          <InputLogin
            {...register("senha")}
            placeholder="Senha"
            type="password"
            iconLeft="/assets/svg/icon-locked.svg"
            data-error={!!errors?.senha?.message}
          />
          {errors?.senha && <ErrorMessage>{errors.senha.message}</ErrorMessage>}
        </div>
        <button>enviar</button>
      </S.Grid>
    </S.MyFormLogin>
  );
};
