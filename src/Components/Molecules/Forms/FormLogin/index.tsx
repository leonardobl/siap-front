import React, { ComponentProps } from "react";
import * as S from "./styles";
import { Link } from "react-router-dom";
import { IAutenticacaoForm } from "../../../../Types/autenticacao";
import { Input } from "../../../Atoms/Inputs/Input";
import { useFormLogin } from "./useFormLogin";
import { Button } from "../../../Atoms/Button";
import { MyModal } from "../../../Atoms/Modal";
import { ErrorMessage } from "../../../Atoms/ErrorMessage";

interface IFormLoginProps extends ComponentProps<"form"> {
  submiteForm: (data: IAutenticacaoForm) => void;
}

export const FormLogin = ({ submiteForm, ...rest }: IFormLoginProps) => {
  const { handleSubmit, register, errors, openModal, setOpenModal, navigate } =
    useFormLogin();

  return (
    <S.Form {...rest} onSubmit={handleSubmit(submiteForm)}>
      <S.WrapperText>
        <p>
          Agendamentos <span>simplificados</span>, <br /> pagamentos
          <span>automatizados</span>
        </p>
      </S.WrapperText>

      <S.Title>
        Olá,
        <br /> Bem vindo(a)
      </S.Title>

      <S.Info>
        Preencha o formulário para fazer <span>login.</span>
      </S.Info>

      <S.Grid>
        <div>
          <Input
            {...register("cpfCNPJ")}
            label="CPF/CNPJ"
            required
            id="cpf/cpnj"
            maxLength={18}
            iconleft="/assets/svg/icon-avatar.svg"
            data-error={!!errors?.cpfCNPJ?.message}
          />
          {errors?.cpfCNPJ && (
            <ErrorMessage>{errors.cpfCNPJ.message}</ErrorMessage>
          )}
        </div>

        <div>
          <Input
            {...register("senha")}
            label="Senha"
            required
            id="senha"
            type="password"
            iconleft="/assets/svg/icon-locked.svg"
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
    </S.Form>
  );
};
