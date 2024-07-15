import React, { ComponentProps } from "react";
import * as S from "./styles";
import { Input } from "../../../Atoms/Inputs/Input";
import { SimpleSelect } from "../../../Atoms/Selects/SimpleSelect";
import { Button } from "../../../Atoms/Button";
import { useFormProviderBasic } from "./useFormProviderBasic";
import { ISelectOptions } from "../../../../Types/inputs";
import { IPrestadorForm } from "../../../../Types/prestador";
import { ErrorMessage } from "../../../Atoms/ErrorMessage";

interface IFormProviderBasicProps extends ComponentProps<"form"> {
  submitForm: (data: IPrestadorForm) => void;
}

export const FormProviderBasic = ({
  submitForm,
  ...rest
}: IFormProviderBasicProps) => {
  const {
    Controller,
    control,
    errors,
    handleSubmit,
    register,
    tiposOptions,
    handleCep,
    ufOptions,
    cidadesOptions,
  } = useFormProviderBasic();

  return (
    <S.Form
      {...rest}
      onSubmit={handleSubmit(submitForm)}
      data-cy="form-provider-basic"
    >
      <div>
        <Input
          {...register("nome")}
          id="Nome"
          label="Nome"
          required
          data-error={!!errors?.nome}
        />
        {errors?.nome && <ErrorMessage>{errors?.nome?.message}</ErrorMessage>}
      </div>
      <div>
        <Input
          {...register("razaoSocial")}
          id="social"
          label="Razão Social"
          required
          data-error={!!errors?.razaoSocial}
        />
        {errors?.razaoSocial && (
          <ErrorMessage>{errors?.razaoSocial?.message}</ErrorMessage>
        )}
      </div>
      <div>
        <Input
          {...register("cnpj")}
          id="CNPJ"
          label="CNPJ"
          required
          maxLength={18}
          data-error={!!errors?.cnpj}
        />
        {errors?.cnpj && <ErrorMessage>{errors?.cnpj?.message}</ErrorMessage>}
      </div>
      <div>
        <Input
          {...register("inscMunicipal")}
          id="municipal"
          label="Inscrição Municipal"
          type="number"
        />
      </div>
      <div>
        <Input
          {...register("inscEstadual")}
          id="estadual"
          label="Inscrição Estadual"
          type="number"
        />
      </div>
      <div>
        <Input
          {...register("email")}
          label="E-mail"
          id="email"
          required
          data-error={!!errors?.email}
        />
        {errors?.email && <ErrorMessage>{errors?.email?.message}</ErrorMessage>}
      </div>
      <div>
        <Controller
          control={control}
          name="tipoNome"
          render={({ field: { onChange, value } }) => (
            <SimpleSelect
              customError={!!errors?.tipoNome}
              inputId="tipo"
              label="Tipo"
              required
              value={tiposOptions.find((i) => i.value === value) || null}
              options={tiposOptions}
              onChange={(e: ISelectOptions) => onChange(e?.value)}
            />
          )}
        />
        {errors?.tipoNome && (
          <ErrorMessage>{errors?.tipoNome?.message}</ErrorMessage>
        )}
      </div>
      <div>
        <Input
          {...register("telefone")}
          label="Telefone"
          required
          id="telefone"
          maxLength={15}
          data-error={!!errors.telefone}
        />
        {errors?.telefone && (
          <ErrorMessage>{errors?.telefone?.message}</ErrorMessage>
        )}
      </div>
      <div>
        <Input
          {...register("endereco.cep")}
          label="CEP"
          required
          id="cep"
          maxLength={9}
          onBlur={handleCep}
          data-error={!!errors?.endereco?.cep}
        />
        {errors?.endereco?.cep && (
          <ErrorMessage>{errors?.endereco?.cep?.message}</ErrorMessage>
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
          <ErrorMessage>{errors?.endereco?.logradouro?.message}</ErrorMessage>
        )}
      </div>
      <div>
        <Input
          {...register("endereco.numero")}
          label="Número"
          id="numero"
          type="number"
        />
      </div>
      <div>
        <Input
          {...register("endereco.complemento")}
          label="Complemento"
          id="complemento"
        />
      </div>
      <div>
        <Input
          {...register("endereco.bairro")}
          id="bairro"
          label="Bairro"
          required
          data-error={!!errors?.endereco?.bairro}
        />
        {errors?.endereco?.bairro && (
          <ErrorMessage>{errors?.endereco?.bairro?.message}</ErrorMessage>
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
              value={ufOptions.find((i) => i.value === value) || null}
              options={ufOptions}
              onChange={(e: ISelectOptions) => onChange(e?.value)}
            />
          )}
        />
        {errors?.endereco?.uf && (
          <ErrorMessage>{errors?.endereco?.uf?.message}</ErrorMessage>
        )}
      </div>
      <div>
        <Controller
          control={control}
          name="endereco.cidade.nome"
          render={({ field: { onChange, value } }) => (
            <SimpleSelect
              label="Cidade"
              required
              inputId="cidade"
              value={cidadesOptions.find((i) => i.value === value) || null}
              options={cidadesOptions}
              customError={!!errors?.endereco?.cidade?.nome}
              onChange={(e: ISelectOptions) => onChange(e?.value)}
            />
          )}
        />
        {errors?.endereco?.cidade?.nome && (
          <ErrorMessage>{errors?.endereco?.cidade?.nome?.message}</ErrorMessage>
        )}
      </div>
      <div>
        <Button variant="blue">Avançar</Button>
      </div>
    </S.Form>
  );
};
