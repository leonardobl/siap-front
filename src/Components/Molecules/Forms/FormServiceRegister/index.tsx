import React, { ComponentProps } from "react";
import * as S from "./styles";
import { Input } from "../../../Atoms/Inputs/Input";
import { Button } from "../../../Atoms/Button";
import { useFormServiceRegister } from "./useFormServiceRegister";
import { IServicoForm } from "../../../../Types/servico";
import { ErrorMessage } from "../../../Atoms/ErrorMessage";

interface IFormServiceRegisterProps extends ComponentProps<"form"> {
  submitForm: (data: IServicoForm) => void;
}

export const FormServiceRegister = ({
  submitForm,
  ...rest
}: IFormServiceRegisterProps) => {
  const { handleSubmit, register, reset, errors } = useFormServiceRegister();

  return (
    <S.Form {...rest} onSubmit={handleSubmit(submitForm)}>
      <div>
        <Input
          {...register("nome")}
          label="Nome"
          id="nome"
          data-error={!!errors?.nome}
        />
        {errors?.nome && <ErrorMessage>{errors.nome.message}</ErrorMessage>}
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
