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
      <img
        id="fundo"
        src="/assets/svg/bg-form-user-register.svg"
        alt="background form"
      />

      <img id="logo" src="/assets/svg/logo-siap-white.svg" alt="logo siap" />

      <S.Grid>
        <div>
          <Input {...register("nome")} label="NOme" />
          {errors?.nome && <ErrorMessage>{errors?.nome?.message}</ErrorMessage>}
        </div>
        <div>
          <Input {...register("cpfCnpj")} placeholder="CPF*" maxLength={18} />
          {errors?.cpfCnpj && (
            <ErrorMessage>{errors?.cpfCnpj?.message}</ErrorMessage>
          )}
        </div>
        <div>
          <Input
            {...register("telefone")}
            placeholder="Telefone"
            maxLength={15}
          />
          {errors?.telefone && (
            <ErrorMessage>{errors?.telefone?.message}</ErrorMessage>
          )}
        </div>
        <div>
          <Input {...register("email")} placeholder="E-mail" />
          {errors?.email && (
            <ErrorMessage>{errors?.email?.message}</ErrorMessage>
          )}
        </div>
        <div>
          <Input
            {...register("endereco.cep")}
            placeholder="CEP*"
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
            placeholder="Logadrouro"
          />
        </div>
        <div>
          <Input
            {...register("endereco.numero")}
            type="number"
            placeholder="Número*"
          />
          {errors?.endereco?.numero?.message && (
            <ErrorMessage>{errors.endereco.numero.message}</ErrorMessage>
          )}
        </div>
        <div>
          <Input
            {...register("endereco.complemento")}
            placeholder="Complemento"
          />
        </div>
        <div>
          <Input {...register("endereco.bairro")} placeholder="Bairro*" />
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
                placeholder={"UF*"}
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
                placeholder={"Cidade*"}
              />
            )}
          />
          {errors?.endereco?.uf?.message && (
            <ErrorMessage>{errors.endereco.uf.message}</ErrorMessage>
          )}
        </div>
        <div>
          <InputLogin
            {...register("senha")}
            placeholder="Senha*"
            type="password"
          />
          {errors?.senha?.message && (
            <ErrorMessage>{errors.senha.message}</ErrorMessage>
          )}
        </div>{" "}
        <div>
          <InputLogin
            {...register("confirmSenha")}
            placeholder="Confirmar Senha*"
            type="password"
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
