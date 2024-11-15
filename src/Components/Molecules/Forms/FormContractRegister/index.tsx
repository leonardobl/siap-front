import React, { ComponentProps } from "react";
import * as S from "./styles";
import { useFormContractRegister } from "./useFormContractRegister";
import { AsyncSimpleSelect } from "../../../Atoms/Selects/AsyncSelect";
import { InputDate } from "../../../Atoms/Inputs/InputDate";
import { Button } from "../../../Atoms/Button";
import { ServicesContractList } from "../../Lists/ServicesContractList";
import { reverseToIsoDate } from "../../../../Utils/dateTransform";
import { IContratoCompletoFormRHF } from "../../../../Types/contrato";
import { ErrorMessage } from "../../../Atoms/ErrorMessage";
import { ISelectOptions } from "../../../../Types/inputs";
import { SimpleSelect } from "../../../Atoms/Selects/SimpleSelect";
import { InputMoney } from "../../../Atoms/Inputs/InputMoney";
import dayjs from "dayjs";

interface IFormContractRegisterProps extends ComponentProps<"form"> {
  submitForm: (data: IContratoCompletoFormRHF) => void;
}

export const FormContractRegister = ({
  submitForm,
  ...rest
}: IFormContractRegisterProps) => {
  const {
    handleSubmit,
    Controller,
    control,
    errors,
    dataFim,
    dataIni,
    setDataFim,
    servicosOptions,
    setDataIni,
    onInsert,
    priceValue,
    setPriceValue,
    watch,
    handleDeleteItem,
    handleClean,
    getPrestadores,
    setPrestador,
    prestador,
  } = useFormContractRegister();

  return (
    <S.Form
      {...rest}
      onSubmit={handleSubmit(submitForm)}
      data-cy="form-contract"
    >
      <S.FormContent>
        <div>
          <Controller
            control={control}
            name="uuidPrestador"
            render={({ field: { onChange, value } }) => (
              <AsyncSimpleSelect
                customError={!!errors.uuidPrestador}
                label="Prestador"
                inputId="prestador"
                value={prestador}
                loadOptions={getPrestadores}
                onChange={(e) => {
                  onChange(e?.value);
                  setPrestador(e);
                }}
                required
              />
            )}
          />
          {errors?.uuidPrestador && (
            <ErrorMessage>{errors.uuidPrestador.message}</ErrorMessage>
          )}
        </div>
        <div>
          <Controller
            control={control}
            name="dataInicial"
            render={({ field: { onChange, value } }) => (
              <InputDate
                id="inicial"
                required
                data-error={!!errors.dataInicial}
                label="Data Inicial"
                showIcon
                selected={dataIni}
                onChange={(e) => {
                  setDataIni(e);
                  onChange(dayjs(e).format("YYYY-MM-DD") || "");
                }}
              />
            )}
          />
          {errors?.dataInicial && (
            <ErrorMessage>{errors.dataInicial.message}</ErrorMessage>
          )}
        </div>
        <div>
          <Controller
            control={control}
            name="dataFinal"
            render={({ field: { onChange, value } }) => (
              <InputDate
                data-error={!!errors.dataFinal}
                label="Data final"
                id="final"
                showIcon
                required
                selected={dataFim}
                onChange={(e) => {
                  setDataFim(e);
                  onChange(dayjs(e).format("YYYY-MM-DD") || "");
                }}
              />
            )}
          />
          {errors?.dataFinal && (
            <ErrorMessage>{errors.dataFinal.message}</ErrorMessage>
          )}
        </div>

        <div>
          <Controller
            control={control}
            name="servico"
            render={({ field: { value, onChange } }) => (
              <SimpleSelect
                options={servicosOptions}
                required
                customError={!!errors?.servico}
                value={servicosOptions.find((i) => i.value === value) || null}
                label="Serviço"
                inputId="servico"
                onChange={(e: ISelectOptions) => {
                  onChange(e?.value);
                }}
              />
            )}
          />
          {errors?.servicos && (
            <ErrorMessage>{errors.servicos.message}</ErrorMessage>
          )}
        </div>

        <div>
          <div>
            <Controller
              control={control}
              name="valor"
              render={({ field: { onChange, value } }) => (
                <InputMoney
                  data-error={!!errors?.valor}
                  required
                  id="money"
                  label="Valor"
                  value={priceValue}
                  onValueChange={(value, name, values) => {
                    setPriceValue(value);
                    onChange(values?.float);
                  }}
                />
              )}
            />
            <Button variant="blue" type="button" onClick={onInsert}>
              Inserir
            </Button>
          </div>
        </div>
      </S.FormContent>

      <ServicesContractList
        servicesOptions={servicosOptions}
        onDeleteItem={handleDeleteItem}
        services={watch("servicos")}
      />

      <S.WrapperButtons>
        <Button type="reset" onClick={handleClean}>
          Limpar
        </Button>
        <Button variant="blue">Cadastrar</Button>
      </S.WrapperButtons>
    </S.Form>
  );
};
