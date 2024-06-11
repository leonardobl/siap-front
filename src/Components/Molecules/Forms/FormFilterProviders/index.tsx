import React, { ComponentProps } from "react";
import * as S from "./styles";
import { Input } from "../../../Atoms/Inputs/Input";
import { SimpleSelect } from "../../../Atoms/Selects/SimpleSelect";
import { Button } from "../../../Atoms/Button";
import { useFormFilterProviders } from "./useFormFilterProviders";
import { IPrestadorProps } from "../../../../Types/prestador";
import { ISelectOptions } from "../../../../Types/inputs";
import { ErrorMessage } from "../../../Atoms/ErrorMessage";

interface IFormFilterProvidersProps extends ComponentProps<"form"> {
  submitForm: (data: IPrestadorProps) => void;
}

export const FormFilterProviders = ({
  submitForm,
  ...rest
}: IFormFilterProvidersProps) => {
  const {
    control,
    handleSubmit,
    register,
    reset,
    Controller,
    StatusOptions,
    errors,
    cidadesOptions,
    tipoOptions,
  } = useFormFilterProviders();

  return (
    <S.Form {...rest} onSubmit={handleSubmit(submitForm)}>
      <div>
        <Input {...register("nome")} id="Nome" label="Nome" />
      </div>
      <div>
        <Input
          {...register("cnpj")}
          id="CNPJ"
          label="CNPJ"
          maxLength={18}
          data-error={!!errors.cnpj}
        />
        {errors.cnpj && <ErrorMessage>{errors.cnpj.message}</ErrorMessage>}
      </div>
      <div>
        <Controller
          control={control}
          name="cidade"
          render={({ field: { onChange, value } }) => (
            <SimpleSelect
              label="Cidade"
              inputId="Cidade"
              isClearable
              options={cidadesOptions}
              value={cidadesOptions.find((i) => i.value === value) || null}
              onChange={(e: ISelectOptions) => onChange(e?.value)}
            />
          )}
        />
      </div>
      <div>
        <Controller
          control={control}
          name="tipo"
          render={({ field: { onChange, value } }) => (
            <SimpleSelect
              label="Tipo"
              inputId="Tipo"
              isClearable
              options={tipoOptions}
              value={tipoOptions.find((i) => i.value === value) || null}
              onChange={(e: ISelectOptions) => onChange(e?.value)}
            />
          )}
        />
      </div>
      <div>
        <Controller
          control={control}
          name="status"
          render={({ field: { onChange, value } }) => (
            <SimpleSelect
              label="Status"
              inputId="Status"
              isClearable
              options={StatusOptions}
              value={StatusOptions.find((i) => i.value === value) || null}
              onChange={(e: ISelectOptions) => onChange(e?.value)}
            />
          )}
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
