import React, { ComponentProps } from "react";
import * as S from "./styles";
import { Input } from "../../../Atoms/Inputs/Input";
import { Button } from "../../../Atoms/Button";
import { useFormProviderTypeRegister } from "./useFormProviderTypeRegister";
import { ITipoPrestadorDTO } from "../../../../Types/tipoPrestador";
import { ErrorMessage } from "../../../Atoms/ErrorMessage";

interface IFormProviderTypeRegister extends ComponentProps<"form"> {
  submitForm: (data: ITipoPrestadorDTO) => void;
  onCancel: () => void;
}

export const FormProviderTypeRegister = ({
  submitForm,
  onCancel,
  ...rest
}: IFormProviderTypeRegister) => {
  const { handleSubmit, register, reset, errors } =
    useFormProviderTypeRegister();

  return (
    <S.Form {...rest} onSubmit={handleSubmit(submitForm)}>
      <div>
        <Input
          {...register("nome")}
          label="Nome"
          id="nome"
          required
          data-error={!!errors?.nome}
        />
        {errors?.nome && <ErrorMessage>{errors.nome.message}</ErrorMessage>}
      </div>
      <div>
        <Button
          type="reset"
          onClick={() => {
            reset();
            onCancel();
          }}
        >
          Cancelar
        </Button>
        <Button variant="blue">Salvar</Button>
      </div>
    </S.Form>
  );
};
