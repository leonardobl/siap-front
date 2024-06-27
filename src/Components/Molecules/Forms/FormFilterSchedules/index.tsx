import React, { ComponentProps } from "react";
import * as S from "./styles";
import { Input } from "../../../Atoms/Inputs/Input";
import { SimpleSelect } from "../../../Atoms/Selects/SimpleSelect";
import { InputDate } from "../../../Atoms/Inputs/InputDate";
import { Button } from "../../../Atoms/Button";
import { useFormFilterSchedules } from "./useFormFilterSchedules";
import { ISelectOptions } from "../../../../Types/inputs";

interface IFormFilterSchedulesProps extends ComponentProps<"form"> {
  submitForm: () => void;
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
    errors,
    handleSubmit,
    register,
    StatusOptions,
    reset,
  } = useFormFilterSchedules();

  return (
    <S.Form {...rest} onSubmit={handleSubmit(submitForm)}>
      <div>
        <Input {...register("cliente")} label="Cliente" />
      </div>

      <div>
        <Input {...register("profissional")} label="Profissional" />
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
          name="dataIni"
          control={control}
          render={({ field: { onChange, value } }) => (
            <InputDate showIcon label="Data Inicial" onChange={() => ""} />
          )}
        />
      </div>

      <div>
        <Controller
          name="dataFim"
          control={control}
          render={({ field: { onChange, value } }) => (
            <InputDate showIcon label="Data Final" onChange={() => ""} />
          )}
        />
      </div>

      <div>
        <Button
          type="reset"
          onClick={() => {
            onClean && onClean();
            reset();
          }}
        >
          Limpar
        </Button>
        <Button variant="blue">Buscar</Button>
      </div>
    </S.Form>
  );
};
