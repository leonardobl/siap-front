import React, { ComponentProps } from "react";
import * as S from "./styles";
import { Input } from "../../../Atoms/Inputs/Input";
import { SimpleSelect } from "../../../Atoms/Selects/SimpleSelect";
import { Button } from "../../../Atoms/Button";
import { useFormFinanceRegister } from "./useFormFinanceRegister";

interface IFormFinanceRegisterProps extends ComponentProps<"form"> {
  submitForm: (e) => void;
}

export const FormFinanceRegister = ({
  submitForm,
  ...rest
}: IFormFinanceRegisterProps) => {
  const {} = useFormFinanceRegister();

  return (
    <S.Form {...rest} onSubmit={submitForm}>
      <div>
        <SimpleSelect label="Banco" required inputId="banco" />
      </div>
      <div>
        <Input label="Agência" required id="agencia" />
      </div>
      <div>
        <Input label="Conta" required id="conta" />
      </div>
      <div>
        <Input label="Operação" id="operacao" />
      </div>
      <div>
        <Button variant="blue">Avançar</Button>
      </div>
    </S.Form>
  );
};
