import React, { ComponentProps } from "react";
import * as S from "./styles";
import { AsyncSimpleSelect } from "../../../Atoms/Selects/AsyncSelect";
import { Button } from "../../../Atoms/Button";
import { InputDate } from "../../../Atoms/Inputs/InputDate";
import { SimpleSelect } from "../../../Atoms/Selects/SimpleSelect";
import { useFormSchedule } from "./useFormSchedule";
import { ISelectOptions } from "../../../../Types/inputs";
import { ErrorMessage } from "../../../Atoms/ErrorMessage";
import { reverseToIsoDate } from "../../../../Utils/dateTransform";
import { IAgendamentoAgendarFormProps } from "../../../../Types/agendamento";

interface IFormScheduleProps extends ComponentProps<"form"> {
  formSubmit: (data: IAgendamentoAgendarFormProps) => void;
}

export const FormSchedule = ({ formSubmit, ...rest }: IFormScheduleProps) => {
  const {
    getOptions,
    Controller,
    control,
    date,
    errors,
    handleSubmit,
    setDate,
  } = useFormSchedule();
  return (
    <S.Form {...rest} onSubmit={handleSubmit(formSubmit)}>
      <div>
        <Controller
          name="uuid"
          control={control}
          render={({ field: { onChange, value } }) => (
            <AsyncSimpleSelect
              onChange={(e: ISelectOptions) => onChange(e?.value)}
              label="Profissional"
              customError={!!errors?.uuid}
              loadOptions={getOptions}
            />
          )}
        />
        {errors?.uuid && <ErrorMessage>{errors.uuid.message}</ErrorMessage>}
      </div>

      <div>
        <Controller
          name="diaAgendado"
          control={control}
          render={({ field: { onChange } }) => (
            <InputDate
              data-error={!!errors?.diaAgendado}
              placeholderText={"__/__/__"}
              label="Data"
              showIcon
              selected={date}
              onChange={(e) => {
                setDate(e);
                onChange(reverseToIsoDate(e?.toLocaleDateString()));
              }}
            />
          )}
        />

        {errors?.diaAgendado && (
          <ErrorMessage>{errors.diaAgendado.message}</ErrorMessage>
        )}
      </div>
      <div>
        <Controller
          control={control}
          name="horaAgendada"
          render={({ field: { onChange, value } }) => (
            <SimpleSelect
              customError={!!errors?.horaAgendada}
              value={value || null}
              label="Horário"
              onChange={(e: ISelectOptions) => {
                onChange(e?.value);
              }}
            />
          )}
        />

        {errors?.horaAgendada && (
          <ErrorMessage>{errors.horaAgendada.message}</ErrorMessage>
        )}
      </div>

      <div>
        <Button variant="blue">Confirmar</Button>
      </div>
    </S.Form>
  );
};
