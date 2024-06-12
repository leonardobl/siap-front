import React, { ComponentProps } from "react";
import * as S from "./styles";
import { Input } from "../../../Atoms/Inputs/Input";
import { Button } from "../../../Atoms/Button";
import { useFormServiceRegister } from "./useFormServiceRegister";
import { IServicoForm } from "../../../../Types/servicos";

interface IFormServiceRegisterProps extends ComponentProps<"form"> {
  submitForm: (data: IServicoForm) => void;
}

export const FormServiceRegister = ({
  submitForm,
  ...rest
}: IFormServiceRegisterProps) => {
  const { handleSubmit, register, reset } = useFormServiceRegister();

  return (
    <S.Form {...rest} onSubmit={handleSubmit(submitForm)}>
      <div>
        <Input {...register("nome")} label="Nome" id="nome" />
      </div>

      <div>
        <Button type="reset" onClick={() => reset()}>
          Limpar
        </Button>
        <Button variant="blue">Salvar</Button>
      </div>
    </S.Form>
  );
};
