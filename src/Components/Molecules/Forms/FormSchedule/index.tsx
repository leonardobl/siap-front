import React, { ComponentProps } from "react";
import * as S from "./styles";
import { AsyncSimpleSelect } from "../../../Atoms/Selects/AsyncSelect";
import { Input } from "../../../Atoms/Inputs/Input";
import { Button } from "../../../Atoms/Button";
import { InputDate } from "../../../Atoms/Inputs/InputDate";
import { SimpleSelect } from "../../../Atoms/Selects/SimpleSelect";
import { useFormSchedule } from "./useFormSchedule";
import { v4 } from "uuid";

interface IFormScheduleProps extends ComponentProps<"form"> {
  formSubmit: () => void;
}

export const FormSchedule = ({ formSubmit, ...rest }: IFormScheduleProps) => {
  const { navigate } = useFormSchedule();
  return (
    <S.Form {...rest} onSubmit={formSubmit}>
      <div>
        <AsyncSimpleSelect />
      </div>

      <div>
        <InputDate
          placeholderText={"__/__/__"}
          label="Data"
          showIcon
          onChange={() => ""}
        />
      </div>
      <div>
        <SimpleSelect value={"14:00"} label="Horário" />
      </div>

      <div>
        <Button
          variant="blue"
          onClick={() =>
            navigate(`/novo-agendamento/agendamento/detalhe?id=${v4()}`)
          }
        >
          Confirmar
        </Button>
      </div>
    </S.Form>
  );
};
