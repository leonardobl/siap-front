import React, { ComponentProps } from "react";
import * as S from "./styles";
import { useFormLogin } from "./useFormLogin";
import { InputLogin } from "../../Atoms/Inputs/InputLogin";
import { ErrorMessage } from "../../Atoms/ErrorMessage";
import { Link } from "react-router-dom";
import { IAutenticacaoForm } from "../../../Types/autenticacao";

interface IFormLoginProps extends ComponentProps<"form"> {
  submiteForm: (data: IAutenticacaoForm) => void;
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
            {...register("cpfCNPJ")}
            placeholder="CPF/CNPJ"
            maxLength={18}
            iconLeft="/assets/svg/icon-avatar.svg"
            data-error={!!errors?.cpfCNPJ?.message}
          />
          {errors?.cpfCNPJ && (
            <ErrorMessage>{errors.cpfCNPJ.message}</ErrorMessage>
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
          <S.ButtonEnter>Entrar</S.ButtonEnter>
        </div>

        <div>
          <S.ButtonRegister>Cadastrar</S.ButtonRegister>
        </div>

        <div>
          <Link to={"/esqueceu-senha"} id="forgot">
            Esqueceu sua senha?
          </Link>
        </div>
      </S.Grid>
    </S.MyFormLogin>
  );
};
