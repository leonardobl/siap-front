import React, { ComponentProps } from "react";
import * as S from "./styles";
import { Input } from "../../../Atoms/Inputs/Input";
import { Button } from "../../../Atoms/Button";
import { ITipoPrestadorProps } from "../../../../Types/tipoPrestador";
import { useFormFilterProviderType } from "./useFormFilterProviderType";
import { ErrorMessage } from "../../../Atoms/ErrorMessage";

interface IFormFilterProviderType extends ComponentProps<"form"> {
  submitForm: (data: ITipoPrestadorProps) => void;
  onClean?: () => void;
}

export const FormFilterProviderType = ({
  submitForm,
  onClean,
  ...rest
}: IFormFilterProviderType) => {
  const { handleSubmit, register, reset, errors } = useFormFilterProviderType();

  return (
    <S.Form {...rest} onSubmit={handleSubmit(submitForm)}>
      <div>
        <Input
          {...register("nome")}
          label="Tipo de Prestador"
          id="tipoPrestador"
          data-error={!!errors?.nome}
        />
        {errors?.nome && <ErrorMessage>{errors?.nome?.message}</ErrorMessage>}
      </div>
      <div>
        <Button
          type="reset"
          onClick={() => {
            reset();
            onClean && onClean();
          }}
        >
          Limpar
        </Button>
        <Button variant="blue">Buscar</Button>
      </div>
    </S.Form>
  );
};
