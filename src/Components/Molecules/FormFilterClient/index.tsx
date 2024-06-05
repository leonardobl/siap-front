import React from "react";
import * as S from "./styles";
import { Input } from "../../Atoms/Inputs/Input";
import { Button } from "../../Atoms/Button";
import { useFormFilterClient } from "./useFormFilterClient";
import { IFormFilterClientProps } from "../../../Types/formFilterClient";

export const FormFilterClient = (props: IFormFilterClientProps) => {
  const { register, handleSubmit } = useFormFilterClient();
  return (
    <S.FormFilter {...props} onSubmit={handleSubmit(props.submitForm)}>
      <div>
        <Input label="Nome Completo" {...register("nome")} />
      </div>
      <div>
        <Input label="CPF/CNPJ" {...register("cpf")} />
      </div>
      <div>
        <Input label="Telefone" maxLength={15} {...register("telefone")} />
      </div>
      <div>
        <Input type="email" label="E-mail" {...register("email")} />
      </div>

      <div>
        <Button type="reset">Limpar</Button>
        <Button variant="blue">Buscar</Button>
      </div>
    </S.FormFilter>
  );
};
