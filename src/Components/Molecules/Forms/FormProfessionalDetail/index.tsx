import React, { ComponentProps } from "react";
import * as S from "./styles";
import { Input } from "../../../Atoms/Inputs/Input";
import { IProfissionalDTO } from "../../../../Types/profissional";

interface IFormProfessionalDetailProps extends ComponentProps<"form"> {
  professional: IProfissionalDTO;
}

export const FormProfessionalDetail = ({
  professional,
  ...rest
}: IFormProfessionalDetailProps) => {
  return (
    <S.Form {...rest}>
      <div>
        <Input value={professional?.nome} label="Nome Completo" disabled />
      </div>
      <div>
        <Input value={professional?.cpf} label="CPF" disabled />
      </div>
      <div>
        <Input value={professional?.telefone} label="Telefone" disabled />
      </div>
      <div>
        <Input value={professional?.email} label="E-mail" disabled />
      </div>
      <div>
        <Input value={professional?.conselho} label="Conselho" disabled />
      </div>
      <div>
        <Input
          value={professional?.numeroConselho}
          label="Número do Conselho"
          disabled
        />
      </div>
      <div>
        <Input
          value={professional?.ufConselho}
          label="UF do Conselho"
          disabled
        />
      </div>
    </S.Form>
  );
};
