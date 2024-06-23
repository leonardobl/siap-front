import React, { ComponentProps } from "react";
import * as S from "./styles";
import { Input } from "../../../Atoms/Inputs/Input";
import { Button } from "../../../Atoms/Button";
import { useFormFilterUsers } from "./useFormFilterUsers";
import { ErrorMessage } from "../../../Atoms/ErrorMessage";
import { IUsuariosListProps } from "../../../../Types/usuario";

interface IFormFilterUsersProps extends ComponentProps<"form"> {
  submitForm: (data: IUsuariosListProps) => void;
}

export const FormFilterUsers = ({
  submitForm,
  ...rest
}: IFormFilterUsersProps) => {
  const { register, reset, errors, handleSubmit } = useFormFilterUsers();

  return (
    <S.Form {...rest} onSubmit={handleSubmit(submitForm)}>
      <div>
        <Input {...register("nome")} label="Nome" id="nome" />
      </div>
      <div>
        <Input
          {...register("cpfCnpj")}
          label="CPF/CNPJ"
          id="cpf"
          maxLength={18}
        />
      </div>
      <div>
        <Input
          {...register("telefone")}
          label="Telefone"
          id="telefone"
          maxLength={15}
        />
      </div>
      <div>
        <Input
          {...register("email")}
          label="E-mail"
          id="email"
          data-error={!!errors.email}
        />
        {errors?.email && <ErrorMessage>{errors?.email?.message}</ErrorMessage>}
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
