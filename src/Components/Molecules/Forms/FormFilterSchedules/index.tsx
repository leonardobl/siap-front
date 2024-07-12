import React, { ComponentProps } from "react";
import * as S from "./styles";
import { Input } from "../../../Atoms/Inputs/Input";
import { SimpleSelect } from "../../../Atoms/Selects/SimpleSelect";
import { InputDate } from "../../../Atoms/Inputs/InputDate";
import { Button } from "../../../Atoms/Button";
import { useFormFilterSchedules } from "./useFormFilterSchedules";
import { ISelectOptions } from "../../../../Types/inputs";
import { IAgendamentoProps } from "../../../../Types/agendamento";
import { AsyncSimpleSelect } from "../../../Atoms/Selects/AsyncSelect";
import { reverseToIsoDate } from "../../../../Utils/dateTransform";

interface IFormFilterSchedulesProps extends ComponentProps<"form"> {
  submitForm: (data: IAgendamentoProps) => void;
  onClean?: () => void;
}

export const FormFilterSchedules = ({
  submitForm,
  onClean,

  ...rest
}: IFormFilterSchedulesProps) => {
  const {
    Controller,
    control,
    handleSubmit,
    register,
    StatusOptions,
    reset,
    pathname,
    dateFim,
    dateIni,
    setDateFim,
    setDateIni,
    handleReset,
  } = useFormFilterSchedules();

  return (
    <S.Form
      {...rest}
      onSubmit={handleSubmit(submitForm)}
      data-cy="filter-schedule"
    >
      <div>
        <Input
          {...register(
            pathname.includes("meus-agendamentos")
              ? "prestadorNomeCnpj"
              : "clienteNomeCpf"
          )}
          label={
            pathname.includes("meus-agendamentos") ? "Prestador" : "Cliente"
          }
        />
      </div>

      <div>
        <Input {...register("profissionalNomeCpf")} label="Profissional" />
      </div>

      <div>
        <Controller
          control={control}
          name="status"
          render={({ field: { onChange, value } }) => (
            <SimpleSelect
              label="Status"
              value={StatusOptions.find((i) => i.value === value) || null}
              options={StatusOptions}
              onChange={(e: ISelectOptions) => {
                onChange(e?.value);
              }}
            />
          )}
        />
      </div>

      <div>
        <Controller
          name="dataInicial"
          control={control}
          render={({ field: { onChange, value } }) => (
            <InputDate
              showIcon
              selected={dateIni}
              label="Data Inicial"
              onChange={(e) => {
                onChange(reverseToIsoDate(e?.toLocaleDateString()));
                setDateIni(e);
              }}
            />
          )}
        />
      </div>

      <div>
        <Controller
          name="dataFinal"
          control={control}
          render={({ field: { onChange, value } }) => (
            <InputDate
              showIcon
              selected={dateFim}
              label="Data Final"
              onChange={(e) => {
                setDateFim(e);
                onChange(reverseToIsoDate(e?.toLocaleDateString()));
              }}
            />
          )}
        />
      </div>

      <div>
        <Button
          type="reset"
          onClick={() => {
            onClean && onClean();
            reset();
            handleReset();
          }}
        >
          Limpar
        </Button>
        <Button variant="blue">Buscar</Button>
      </div>
    </S.Form>
  );
};
