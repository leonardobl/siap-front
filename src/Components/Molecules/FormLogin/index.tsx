import React, { ComponentProps } from "react";
import * as S from "./styles";
import { useFormLogin } from "./useFormLogin";
import { InputLogin } from "../../Atoms/Inputs/InputLogin";
import { ErrorMessage } from "../../Atoms/ErrorMessage";
import { Link } from "react-router-dom";
import { IAutenticacaoForm } from "../../../Types/autenticacao";
import { MyModal } from "../../Atoms/Modal";
import { Button } from "../../Atoms/Button";

interface IFormLoginProps extends ComponentProps<"form"> {
  submiteForm: (data: IAutenticacaoForm) => void;
}

export const FormLogin = ({ submiteForm, ...rest }: IFormLoginProps) => {
  const { handleSubmit, register, errors, openModal, setOpenModal, navigate } =
    useFormLogin();

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
          <S.ButtonRegister type="button" onClick={() => setOpenModal(true)}>
            Cadastrar
          </S.ButtonRegister>
        </div>

        <div>
          <Link to={"/esqueceu-senha"} id="forgot">
            Esqueceu sua senha?
          </Link>
        </div>
      </S.Grid>

      <MyModal isOpen={openModal} onAfterClose={() => setOpenModal(false)}>
        <S.ContentModal>
          <img
            id="icon-close"
            src="/assets/svg/icon-close-white.svg"
            alt="icone close"
            onClick={() => setOpenModal(false)}
          />
          <p>
            Cadastro <span>exclusivo</span> para clientes!
          </p>

          <div className="wrapperBtns">
            <Button type="button" onClick={() => setOpenModal(false)}>
              Cancelar
            </Button>
            <Button
              onClick={() => navigate("/cadastro-usuario")}
              type="button"
              variant="blue"
            >
              Continuar
            </Button>
          </div>
        </S.ContentModal>
      </MyModal>
    </S.MyFormLogin>
  );
};
