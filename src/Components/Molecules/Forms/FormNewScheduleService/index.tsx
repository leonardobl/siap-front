import React, { ComponentProps } from "react";
import * as S from "./styles";
import { useFormNewSchedule } from "./useFormNewSchedule";
import { SimpleSelect } from "../../../Atoms/Selects/SimpleSelect";
import { AsyncSimpleSelect } from "../../../Atoms/Selects/AsyncSelect";
import { Button } from "../../../Atoms/Button";
import { IAgendamentoCadastroForm } from "../../../../Types/agendamento";
import { ISelectOptions } from "../../../../Types/inputs";
import { ErrorMessage } from "../../../Atoms/ErrorMessage";

interface IFormNewScheduleServiceProps extends ComponentProps<"form"> {
  submitForm: (data: IAgendamentoCadastroForm) => void;
}

export const FormNewScheduleService = ({
  submitForm,
  ...rest
}: IFormNewScheduleServiceProps) => {
  const {
    getPrestadores,
    servicosOptions,
    control,
    errors,
    handleSubmit,
    register,
    Controller,
  } = useFormNewSchedule();

  return (
    <S.Form {...rest} onSubmit={handleSubmit(submitForm)}>
      <div>
        <Controller
          control={control}
          name="uuidServico"
          render={({ field: { onChange, value } }) => (
            <SimpleSelect
              customError={!!errors?.uuidServico}
              value={servicosOptions.find((i) => i.value === value) || null}
              onChange={(e: ISelectOptions) => onChange(e?.value)}
              required
              options={servicosOptions}
              label="Serviço"
            />
          )}
        />
        {errors?.uuidServico && (
          <ErrorMessage>{errors.uuidServico.message}</ErrorMessage>
        )}
      </div>
      <div>
        {/* <Controller
          control={control}
          name="uuidServico"
          render={({ field: { onChange, value } }) => (
          )}
        /> */}
        <SimpleSelect required label="Cidade" />
        {/* {errors?.uuidServico && (
          <ErrorMessage>{errors.uuidServico.message}</ErrorMessage>
        )} */}
      </div>
      <div>
        <Controller
          control={control}
          name="uuidPrestador"
          render={({ field: { onChange, value } }) => (
            <AsyncSimpleSelect
              required
              customError={!!errors?.uuidPrestador}
              loadOptions={getPrestadores}
              label="Prestador"
              onChange={(e: ISelectOptions) => onChange(e?.value)}
            />
          )}
        />
        {errors?.uuidPrestador && (
          <ErrorMessage>{errors.uuidPrestador.message}</ErrorMessage>
        )}
      </div>
      <div>
        <Button variant="blue">Avançar</Button>
      </div>
    </S.Form>
  );
};
