import React, { ComponentProps } from "react";
import * as S from "./styles";
import { Input } from "../../../Atoms/Inputs/Input";
import { SimpleSelect } from "../../../Atoms/Selects/SimpleSelect";
import { Button } from "../../../Atoms/Button";
import { useFormFinanceRegister } from "./useFormFinanceRegister";
import { ISelectOptions } from "../../../../Types/inputs";
import { ErrorMessage } from "../../../Atoms/ErrorMessage";
import { IDadosFinanceirosForm } from "../../../../Types/prestador";

interface IFormFinanceRegisterProps extends ComponentProps<"form"> {
  submitForm: (data: IDadosFinanceirosForm) => void;
}

export const FormFinanceRegister = ({
  submitForm,
  ...rest
}: IFormFinanceRegisterProps) => {
  const { Controller, control, errors, handleSubmit, register, bancoOptions } =
    useFormFinanceRegister();

  return (
    <S.Form
      {...rest}
      onSubmit={handleSubmit(submitForm)}
      data-cy="form-finance"
    >
      <div>
        <Controller
          control={control}
          name="codigoBanco"
          render={({ field: { onChange, value } }) => (
            <SimpleSelect
              customError={!!errors?.codigoBanco}
              label="Banco"
              required
              options={bancoOptions}
              value={bancoOptions.find((i) => i.value === value) || null}
              inputId="banco"
              onChange={(e: ISelectOptions) => onChange(e?.value)}
            />
          )}
        />
        {errors?.codigoBanco && (
          <ErrorMessage>{errors?.codigoBanco?.message}</ErrorMessage>
        )}
      </div>
      <div>
        <Input
          {...register("agencia")}
          label="Agência"
          required
          type="number"
          id="agencia"
          data-error={!!errors?.agencia}
        />
        {errors?.agencia && (
          <ErrorMessage>{errors.agencia.message}</ErrorMessage>
        )}
      </div>
      <div>
        <Input
          {...register("conta")}
          label="Conta"
          required
          id="conta"
          type="number"
          data-error={!!errors?.conta}
        />
        {errors?.conta && <ErrorMessage>{errors.conta.message}</ErrorMessage>}
      </div>
      <div>
        <Input
          {...register("operacao")}
          label="Operação"
          id="operacao"
          type="number"
          data-error={!!errors.operacao}
        />
        {errors?.operacao && (
          <ErrorMessage>{errors.operacao.message}</ErrorMessage>
        )}
      </div>
      <div>
        <Button variant="blue">Avançar</Button>
      </div>
    </S.Form>
  );
};
