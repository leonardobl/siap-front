import React, { ComponentProps } from "react";
import * as S from "./styles";
import { IClienteForm } from "../../../../Types/cliente";
import { useFormUserRegister } from "./useFormUserRegister";
import { Input } from "../../../Atoms/Inputs/Input";
import { ErrorMessage } from "../../../Atoms/ErrorMessage";
import { Button } from "../../../Atoms/Button";
import { SimpleSelect } from "../../../Atoms/Selects/SimpleSelect";
import { ISelectOptions } from "../../../../Types/inputs";

interface IFormUserRegisterProps extends ComponentProps<"form"> {
  submitForm: (data: IClienteForm) => void;
}

export const FormUserRegister = ({
  submitForm,
  ...rest
}: IFormUserRegisterProps) => {
  const {
    handleSubmit,
    cidadesOptions,
    ufOptions,
    handleCep,
    watch,
    Controller,
    control,
    register,
    errors,
  } = useFormUserRegister();

  return (
    <S.Form {...rest} onSubmit={handleSubmit(submitForm)}>
      <h1>Cadastro</h1>
      <p>
        Preencha o formulário para fazer <span>login.</span>
      </p>

      <S.Grid>
        <div>
          <Input
            {...register("nome")}
            id="name"
            data-error={!!errors?.nome}
            label="Nome Completo"
            required
          />
          {errors?.nome && <ErrorMessage>{errors?.nome?.message}</ErrorMessage>}
        </div>
        <div>
          <Input
            {...register("cpf")}
            data-error={!!errors?.cpf}
            label="CPF"
            id="cpf"
            required
            maxLength={14}
          />
          {errors?.cpf && <ErrorMessage>{errors?.cpf?.message}</ErrorMessage>}
        </div>
        <div>
          <Input
            {...register("telefone")}
            data-error={!!errors?.telefone}
            id="telefone"
            label="Telefone"
            maxLength={15}
          />
          {errors?.telefone && (
            <ErrorMessage>{errors?.telefone?.message}</ErrorMessage>
          )}
        </div>
        <div>
          <Input
            {...register("email")}
            id="email"
            data-error={!!errors?.email}
            label="E-mail"
          />
          {errors?.email && (
            <ErrorMessage>{errors?.email?.message}</ErrorMessage>
          )}
        </div>
        <div>
          <Input
            {...register("endereco.cep")}
            required
            id="cep"
            data-error={!!errors?.endereco?.cep}
            label="CEP"
            onBlur={handleCep}
            maxLength={9}
          />
          {errors?.endereco?.cep?.message && (
            <ErrorMessage>{errors.endereco.cep.message}</ErrorMessage>
          )}
        </div>
        <div>
          <Input
            {...register("endereco.logradouro")}
            label="Logradouro"
            id="logradouro"
            data-error={!!errors?.endereco?.logradouro}
            required
          />
        </div>
        <div>
          <Input
            {...register("endereco.numero")}
            type="number"
            id="numero"
            data-error={!!errors?.endereco?.numero}
            label="Número"
            required
          />
          {errors?.endereco?.numero?.message && (
            <ErrorMessage>{errors.endereco.numero.message}</ErrorMessage>
          )}
        </div>
        <div>
          <Input
            {...register("endereco.complemento")}
            id="complemento"
            data-error={!!errors?.endereco?.complemento}
            label="Complemento"
          />
        </div>
        <div>
          <Input
            {...register("endereco.bairro")}
            data-error={!!errors?.endereco?.bairro}
            label="Bairro"
            id="bairro"
            required
          />
          {errors?.endereco?.bairro?.message && (
            <ErrorMessage>{errors.endereco.bairro.message}</ErrorMessage>
          )}
        </div>
        <div>
          <Controller
            control={control}
            name="endereco.uf"
            render={({ field: { onChange, value } }) => (
              <SimpleSelect
                options={ufOptions}
                label={"UF"}
                required
                inputId="uf"
                customError={!!errors?.endereco?.uf}
                onChange={(e: ISelectOptions) => onChange(e?.value)}
                value={ufOptions?.find((i) => i.value === value) || null}
              />
            )}
          />
          {errors?.endereco?.uf?.message && (
            <ErrorMessage>{errors.endereco.uf.message}</ErrorMessage>
          )}
        </div>
        <div>
          <Controller
            control={control}
            name="endereco.cidade.nome"
            render={({ field: { onChange, value } }) => (
              <SimpleSelect
                options={cidadesOptions}
                inputId="cidade"
                customError={!!errors?.endereco?.cidade?.nome}
                onChange={(e: ISelectOptions) => onChange(e?.value)}
                value={cidadesOptions?.find((i) => i.value === value)}
                label={"Cidade"}
                required
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
            data-error={!!errors?.senha}
            type="password"
          />
          {errors?.senha?.message && (
            <ErrorMessage>{errors.senha.message}</ErrorMessage>
          )}
        </div>{" "}
        <div>
          <Input
            {...register("confirmSenha")}
            label="Confirmar Senha"
            id="confirmSenha"
            data-error={!!errors?.confirmSenha}
            type="password"
            required
          />
          {errors?.confirmSenha?.message && (
            <ErrorMessage>{errors.confirmSenha.message}</ErrorMessage>
          )}
        </div>
        <div>
          <Button variant="blue">Cadastrar</Button>
        </div>
      </S.Grid>
    </S.Form>
  );
};
