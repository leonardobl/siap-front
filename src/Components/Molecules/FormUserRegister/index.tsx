import React, { ComponentProps } from "react";
import * as S from "./styles";
import { Input } from "../../Atoms/Inputs/Input";
import { SimpleSelect } from "../../Atoms/Selects/SimpleSelect";
import { InputLogin } from "../../Atoms/Inputs/InputLogin";
import { Button } from "../../Atoms/Button";
import { IClienteForm } from "../../../Types/cliente";
import { useFormUserRegister } from "./useFormUserRegister";
import { ISelectOptions } from "../../../Types/inputs";
import { ErrorMessage } from "../../Atoms/ErrorMessage";

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
            autoFocus
            label="Nome Completo"
            required
          />
          {errors?.nome && <ErrorMessage>{errors?.nome?.message}</ErrorMessage>}
        </div>
        <div>
          <Input {...register("cpfCnpj")} label="CPF" required maxLength={18} />
          {errors?.cpfCnpj && (
            <ErrorMessage>{errors?.cpfCnpj?.message}</ErrorMessage>
          )}
        </div>
        <div>
          <Input {...register("telefone")} label="Telefone" maxLength={15} />
          {errors?.telefone && (
            <ErrorMessage>{errors?.telefone?.message}</ErrorMessage>
          )}
        </div>
        <div>
          <Input {...register("email")} label="E-mail" type="email" />
          {errors?.email && (
            <ErrorMessage>{errors?.email?.message}</ErrorMessage>
          )}
        </div>
        <div>
          <Input
            {...register("endereco.cep")}
            required
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
            required
          />
        </div>
        <div>
          <Input
            {...register("endereco.numero")}
            type="number"
            label="Número"
            required
          />
          {errors?.endereco?.numero?.message && (
            <ErrorMessage>{errors.endereco.numero.message}</ErrorMessage>
          )}
        </div>
        <div>
          <Input {...register("endereco.complemento")} label="Complemento" />
        </div>
        <div>
          <Input {...register("endereco.bairro")} label="Bairro" required />
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
            name="endereco.cidade"
            render={({ field: { onChange, value } }) => (
              <SimpleSelect
                options={cidadesOptions}
                key={`${Math.random()}${watch("endereco.uf")}`}
                onChange={(e: ISelectOptions) => onChange(e?.value)}
                value={cidadesOptions?.find((i) => i.value === value) || null}
                label={"Cidade"}
                required
              />
            )}
          />
          {errors?.endereco?.uf?.message && (
            <ErrorMessage>{errors.endereco.uf.message}</ErrorMessage>
          )}
        </div>
        <div>
          <Input
            {...register("senha")}
            label="Senha"
            required
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
