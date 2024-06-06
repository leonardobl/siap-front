import React, { ComponentProps } from "react";
import * as S from "./styles";
import { Input } from "../../../Atoms/Inputs/Input";
import { Button } from "../../../Atoms/Button";
import { SimpleSelect } from "../../../Atoms/Selects/SimpleSelect";
import { useFormClientRegister } from "./useFormClientRegister";
import { ErrorMessage } from "../../../Atoms/ErrorMessage";
import { ISelectOptions } from "../../../../Types/inputs";
import { IClienteForm } from "../../../../Types/cliente";

interface IFormClientRegisterProps extends ComponentProps<"form"> {
  submitForm: (data: IClienteForm) => void;
}

export const FormClientRegister = ({
  submitForm,
  ...rest
}: IFormClientRegisterProps) => {
  const {
    navigate,
    Controller,
    cidadesOptions,
    control,
    errors,
    handleCep,
    handleSubmit,
    register,
    ufOptions,
  } = useFormClientRegister();

  return (
    <S.Form {...rest} onSubmit={handleSubmit(submitForm)}>
      <div>
        <Input
          {...register("nome")}
          label="Nome Completo"
          required
          id="nome"
          data-error={!!errors?.nome}
        />
        {errors?.nome && <ErrorMessage>{errors.nome.message}</ErrorMessage>}
      </div>
      <div>
        <Input
          {...register("cpf")}
          label="CPF"
          required
          id="cpf"
          maxLength={14}
          data-error={!!errors?.cpf}
        />
        {errors?.cpf && <ErrorMessage>{errors.cpf.message}</ErrorMessage>}
      </div>
      <div>
        <Input
          {...register("telefone")}
          label="Telefone"
          id="telefone"
          maxLength={15}
          data-error={!!errors?.telefone}
        />
        {errors?.telefone && (
          <ErrorMessage>{errors.telefone.message}</ErrorMessage>
        )}
      </div>
      <div>
        <Input
          {...register("email")}
          label="E-mail"
          id="email"
          data-error={!!errors?.email}
        />
        {errors?.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
      </div>
      <div>
        <Input
          {...register("endereco.cep")}
          label="CEP"
          required
          id="cep"
          onBlur={handleCep}
          maxLength={9}
          data-error={!!errors?.endereco?.cep}
        />
        {errors?.endereco?.cep && (
          <ErrorMessage>{errors.endereco.cep.message}</ErrorMessage>
        )}
      </div>
      <div>
        <Input
          {...register("endereco.logradouro")}
          label="Logradouro"
          required
          id="logradouro"
          data-error={!!errors?.endereco?.logradouro}
        />
        {errors?.endereco?.logradouro && (
          <ErrorMessage>{errors.endereco.logradouro.message}</ErrorMessage>
        )}
      </div>
      <div>
        <Input
          {...register("endereco.numero")}
          label="Número"
          required
          type="number"
          id="numero"
          data-error={!!errors?.endereco?.numero}
        />
        {errors?.endereco?.numero && (
          <ErrorMessage>{errors.endereco.numero.message}</ErrorMessage>
        )}
      </div>
      <div>
        <Input
          {...register("endereco.complemento")}
          label="Complemento"
          id="complemento"
          data-error={!!errors?.endereco?.complemento}
        />
        {errors?.endereco?.complemento && (
          <ErrorMessage>{errors.endereco.complemento.message}</ErrorMessage>
        )}
      </div>
      <div>
        <Input
          {...register("endereco.bairro")}
          label="Bairro"
          required
          id="bairro"
          data-error={!!errors?.endereco?.bairro}
        />
        {errors?.endereco?.bairro && (
          <ErrorMessage>{errors.endereco.bairro.message}</ErrorMessage>
        )}
      </div>

      <div>
        <Controller
          control={control}
          name="endereco.uf"
          render={({ field: { onChange, value } }) => (
            <SimpleSelect
              label="UF"
              required
              customError={!!errors?.endereco?.uf}
              inputId="uf"
              options={ufOptions}
              value={ufOptions.find((i) => i.value === value) || null}
              onChange={(e: ISelectOptions) => {
                onChange(e.value);
              }}
            />
          )}
        />
        {errors?.endereco?.uf && (
          <ErrorMessage>{errors.endereco.uf.message}</ErrorMessage>
        )}
      </div>
      <div>
        <Controller
          control={control}
          name="endereco.cidade.nome"
          render={({ field: { value, onChange } }) => (
            <SimpleSelect
              options={cidadesOptions}
              label="Cidade"
              required
              value={cidadesOptions.find((i) => i.value === value) || null}
              inputId="cidade"
              onChange={(e: ISelectOptions) => {
                onChange(e.value);
              }}
              customError={!!errors?.endereco?.cidade?.nome}
            />
          )}
        />
        {errors?.endereco?.cidade?.nome && (
          <ErrorMessage>{errors.endereco.cidade.nome.message}</ErrorMessage>
        )}
      </div>

      <div>
        <Input
          {...register("senha")}
          label="Senha"
          required
          id="senha"
          type="password"
          data-error={!!errors?.senha}
        />
        {errors?.senha && <ErrorMessage>{errors.senha.message}</ErrorMessage>}
      </div>

      <div>
        <Input
          {...register("confirmSenha")}
          label="Confirmar Senha"
          required
          id="confirm"
          type="password"
          data-error={!!errors?.confirmSenha}
        />
        {errors?.confirmSenha && (
          <ErrorMessage>{errors.confirmSenha.message}</ErrorMessage>
        )}
      </div>

      <div id="wrapper-buttons">
        <Button type="button" onClick={() => navigate("/cliente")}>
          Cancelar
        </Button>
        <Button variant="blue">Salvar</Button>
      </div>
    </S.Form>
  );
};
