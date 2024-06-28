import React from "react";
import * as S from "./styles";
import { Input } from "../../../Atoms/Inputs/Input";

export const FormProfessionalDetail = () => {
  return (
    <S.Form>
      <div>
        <Input label="Nome Completo" disabled />
      </div>
      <div>
        <Input label="CPF" disabled />
      </div>
      <div>
        <Input label="Telefone" disabled />
      </div>
      <div>
        <Input label="E-mail" disabled />
      </div>
      <div>
        <Input label="Conselho" disabled />
      </div>
      <div>
        <Input label="Número do Conselho" disabled />
      </div>
      <div>
        <Input label="UF do Conselho" disabled />
      </div>
    </S.Form>
  );
};
