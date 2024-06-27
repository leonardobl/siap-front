import React, { ComponentProps } from "react";
import * as S from "./styles";
import { useFormNewSchedule } from "./useFormNewSchedule";
import { SimpleSelect } from "../../../Atoms/Selects/SimpleSelect";
import { AsyncSimpleSelect } from "../../../Atoms/Selects/AsyncSelect";
import { Button } from "../../../Atoms/Button";

interface IFormNewScheduleProps extends ComponentProps<"form"> {
  submitForm: () => void;
}

export const FormNewSchedule = ({
  submitForm,
  ...rest
}: IFormNewScheduleProps) => {
  const { getPrestadores, servicosOptions } = useFormNewSchedule();

  return (
    <S.Form {...rest} onSubmit={submitForm}>
      <div>
        <SimpleSelect required options={servicosOptions} label="Serviço" />
      </div>
      <div>
        <SimpleSelect required label="Cidade" />
      </div>
      <div>
        <AsyncSimpleSelect
          required
          loadOptions={getPrestadores}
          label="Prestador"
        />
      </div>
      <div>
        <Button variant="blue">Avançar</Button>
      </div>
    </S.Form>
  );
};
