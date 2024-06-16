import React, { ComponentProps } from "react";
import * as S from "./styles";
import { Input } from "../../../Atoms/Inputs/Input";
import { Button } from "../../../Atoms/Button";
import { ITipoPrestadorProps } from "../../../../Types/tipoPrestador";
import { useFormFilterProviderType } from "./useFormFilterProviderType";

interface IFormFilterProviderType extends ComponentProps<"form"> {
  submitForm: (data: ITipoPrestadorProps) => void;
}

export const FormFilterProviderType = ({
  submitForm,
  ...rest
}: IFormFilterProviderType) => {
  const { handleSubmit, register, reset } = useFormFilterProviderType();

  return (
    <S.Form {...rest} onSubmit={handleSubmit(submitForm)}>
      <div>
        <Input
          {...register("nome")}
          label="Tipo de Prestador"
          id="tipoPrestador"
        />
      </div>
      <div>
        <Button type="reset" onClick={() => reset()}>
          Limpar
        </Button>
        <Button variant="blue">Buscar</Button>
      </div>
    </S.Form>
  );
};
