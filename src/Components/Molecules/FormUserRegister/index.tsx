import React, { ComponentProps } from "react";
import * as S from "./styles";
import { Input } from "../../Atoms/Inputs/Input";
import { SimpleSelect } from "../../Atoms/Selects/SimpleSelect";
import { InputLogin } from "../../Atoms/Inputs/InputLogin";
import { Button } from "../../Atoms/Button";

interface IFormUserRegisterProps extends ComponentProps<"form"> {
  submitForm: (data: any) => void;
}

export const FormUserRegister = ({
  submitForm,
  ...rest
}: IFormUserRegisterProps) => {
  return (
    <S.Form {...rest} onSubmit={submitForm}>
      <img
        id="fundo"
        src="/assets/svg/bg-form-user-register.svg"
        alt="background form"
      />

      <img id="logo" src="/assets/svg/logo-siap-white.svg" alt="logo siap" />

      <S.Grid>
        <div>
          <Input placeholder="Nome Completo*" />
        </div>
        <div>
          <Input placeholder="CPF*" />
        </div>
        <div>
          <Input placeholder="Telefone" />
        </div>
        <div>
          <Input placeholder="E-mail" />
        </div>
        <div>
          <Input placeholder="CEP*" />
        </div>
        <div>
          <Input placeholder="Logadrouro" />
        </div>
        <div>
          <Input placeholder="Número" />
        </div>
        <div>
          <Input placeholder="Complemento" />
        </div>
        <div>
          <Input placeholder="Bairro*" />
        </div>
        <div>
          <SimpleSelect placeholder={"UF*"} />
        </div>
        <div>
          <SimpleSelect placeholder={"Cidade*"} />
        </div>
        <div>
          <InputLogin placeholder="Senha*" type="password" />
        </div>{" "}
        <div>
          <InputLogin placeholder="Confirmar Senha*" type="password" />
        </div>
        <div>
          <Button variant="blue">Cadastrar</Button>
        </div>
      </S.Grid>
    </S.Form>
  );
};
