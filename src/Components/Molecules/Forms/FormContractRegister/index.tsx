import React, { ComponentProps } from "react";
import * as S from "./styles";
import { IContratoCompletoForm } from "../../../../Types/contrato";
import { useFormContractRegister } from "./useFormContractRegister";
import { AsyncSimpleSelect } from "../../../Atoms/Selects/AsyncSelect";
import { InputDate } from "../../../Atoms/Inputs/InputDate";
import { SimpleSelect } from "../../../Atoms/Selects/SimpleSelect";
import { Input } from "../../../Atoms/Inputs/Input";
import { Button } from "../../../Atoms/Button";
import { InputMoney } from "../../../Atoms/Inputs/InputMoney";
import { ServicesContractList } from "../../Lists/ServicesContractList";

interface IFormContractRegisterProps extends ComponentProps<"form"> {
  submitForm: (data: IContratoCompletoForm) => void;
}

const servicos = [
  {
    nome: "Exame Médico",
    valor: "R$ 195,00",
  },
  {
    nome: "Exame Toxicológico",
    valor: "R$ 179,00",
  },
  {
    nome: "Exame Psicológico ",
    valor: "R$ 145,00",
  },
];

export const FormContractRegister = ({
  submitForm,
  ...rest
}: IFormContractRegisterProps) => {
  const { handleSubmit } = useFormContractRegister();

  return (
    <S.Form {...rest} onSubmit={handleSubmit(submitForm)}>
      <S.FormContent>
        <div>
          <AsyncSimpleSelect
            inputId="prestador"
            label="Prestador"
            isClearable
          />
        </div>
        <div>
          <InputDate
            id="inicial"
            label="Data Inicial"
            showIcon
            onChange={() => ""}
          />
        </div>
        <div>
          <InputDate
            label="Data final"
            id="final"
            showIcon
            onChange={() => ""}
          />
        </div>
        <div>
          <SimpleSelect label="Serviço" id="servico" />
        </div>

        <div>
          <InputMoney id="money" label="Valor" />{" "}
          <Button type="button" variant="blue">
            Inserir
          </Button>
        </div>
      </S.FormContent>

      <ServicesContractList services={servicos} />

      <S.WrapperButtons>
        <Button>Limpar</Button>
        <Button variant="blue">Cadastrar</Button>
      </S.WrapperButtons>
    </S.Form>
  );
};
