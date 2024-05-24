import React, { ComponentProps } from "react";
import * as S from "./styles";
import { useFormLogin } from "./useFormLogin";
import { InputLogin } from "../../Atoms/Inputs/InputLogin";
import { ErrorMessage } from "../../Atoms/ErrorMessage";
import { Button } from "../../Atoms/Button";

interface IFormLoginProps extends ComponentProps<"form"> {
  submiteForm: (data) => void;
}

export const FormLogin = ({ submiteForm, ...rest }: IFormLoginProps) => {
  const { handleSubmit, register, errors } = useFormLogin();

  return (
    <S.MyFormLogin {...rest} onSubmit={handleSubmit(submiteForm)}>
      <img id="fundo" src="/assets/img/fundo.png" alt="background" />
      <img id="logo" src="/assets/svg/logo-siap-white.svg" alt="logo siap" />
      <S.Grid>
        <div>
          <InputLogin
            {...register("cpfCnpj")}
            placeholder="CPF/CNPJ"
            maxLength={18}
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
        <div>
          <Button iconLeft="/assets/svg/icon-plus.svg">Avançar</Button>
        </div>
      </S.Grid>
    </S.MyFormLogin>
  );
};
