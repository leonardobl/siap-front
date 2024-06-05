import React from "react";
import * as S from "./styles";
import { Input } from "../../../Atoms/Inputs/Input";
import { Button } from "../../../Atoms/Button";
import { useFormFilterClient } from "./useFormFilterClient";
import { IFormFilterClientProps } from "../../../../Types/formFilterClient";
import { ErrorMessage } from "../../../Atoms/ErrorMessage";

export const FormFilterClient = ({
  submitForm,
  ...rest
}: IFormFilterClientProps) => {
  const { register, handleSubmit, errors, reset } = useFormFilterClient();
  return (
    <S.FormFilter {...rest} onSubmit={handleSubmit(submitForm)}>
      <div>
        <Input id="nome" label="Nome Completo" {...register("nome")} />
      </div>
      <div>
        <Input id="cpf" label="CPF" {...register("cpf")} maxLength={14} />
      </div>
      <div>
        <Input
          id="telefone"
          label="Telefone"
          maxLength={15}
          {...register("telefone")}
        />
      </div>
      <div>
        <Input id="email" label="E-mail" {...register("email")} />
        {errors?.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
      </div>

      <div>
        <Button type="reset" onClick={() => reset()}>
          Limpar
        </Button>
        <Button variant="blue">Buscar</Button>
      </div>
    </S.FormFilter>
  );
};
