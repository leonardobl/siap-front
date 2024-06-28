import React, { ComponentProps } from "react";
import * as S from "./styles";
import { Input } from "../../../Atoms/Inputs/Input";
import { SimpleSelect } from "../../../Atoms/Selects/SimpleSelect";
import { Button } from "../../../Atoms/Button";
import { IProfissionalForm } from "../../../../Types/profissional";
import { useFormProfessionalRegister } from "./useFormProfessionalRegister";
import { ErrorMessage } from "../../../Atoms/ErrorMessage";
import { ISelectOptions } from "../../../../Types/inputs";

interface IFormProfessionalRegisterProps extends ComponentProps<"form"> {
  submitForm: (data: IProfissionalForm) => void;
  onCancel?: () => void;
}

export const FormProfessionalRegister = ({
  submitForm,
  onCancel,
  ...rest
}: IFormProfessionalRegisterProps) => {
  const {
    handleSubmit,
    Controller,
    control,
    errors,
    register,
    ufOptions,
    conselhoOptions,
  } = useFormProfessionalRegister();

  return (
    <S.Form {...rest} onSubmit={handleSubmit(submitForm)}>
      <div>
        <Input
          {...register("nome")}
          label="Nome"
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
        <Controller
          control={control}
          name="conselho"
          render={({ field: { onChange, value } }) => (
            <SimpleSelect
              label="Conselho"
              required
              inputId="conselho"
              value={conselhoOptions.find((i) => i.value === value) || null}
              options={conselhoOptions}
              customError={!!errors?.conselho}
              onChange={(e: ISelectOptions) => onChange(e?.value)}
            />
          )}
        />

        {errors?.conselho && (
          <ErrorMessage>{errors.conselho.message}</ErrorMessage>
        )}
      </div>
      <div>
        <Input
          {...register("numeroConselho")}
          label="Número do Conselho"
          required
          type="number"
          data-error={!!errors?.numeroConselho}
          id="numero"
        />
        {errors?.numeroConselho && (
          <ErrorMessage>{errors.numeroConselho.message}</ErrorMessage>
        )}
      </div>
      <div>
        <Controller
          control={control}
          name="ufConselho"
          render={({ field: { onChange, value } }) => (
            <SimpleSelect
              label="UF do Conselho"
              required
              inputId="uf"
              customError={!!errors?.ufConselho}
              value={ufOptions.find((i) => i.value === value) || null}
              options={ufOptions}
              onChange={(e: ISelectOptions) => onChange(e?.value)}
            />
          )}
        />
        {errors?.ufConselho && (
          <ErrorMessage>{errors.ufConselho.message}</ErrorMessage>
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
          {...register("telefone")}
          label="Telefone"
          maxLength={15}
          id="telefone"
          data-error={!!errors?.telefone}
        />
        {errors?.telefone && (
          <ErrorMessage>{errors.telefone.message}</ErrorMessage>
        )}
      </div>
      <div>
        {onCancel && (
          <Button type="button" onClick={onCancel}>
            Cancelar
          </Button>
        )}
        <Button variant="blue">Salvar</Button>
      </div>
    </S.Form>
  );
};
