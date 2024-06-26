import React from "react";
import * as S from "./styles";
import { useFormNewSchedule } from "./useFormNewSchedule";
import { SimpleSelect } from "../../../Atoms/Selects/SimpleSelect";
import { AsyncSimpleSelect } from "../../../Atoms/Selects/AsyncSelect";
import { Button } from "../../../Atoms/Button";
import { v4 } from "uuid";

export const FormNewSchedule = () => {
  const { getPrestadores, servicosOptions, navigate } = useFormNewSchedule();

  return (
    <S.Form>
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
        <Button
          onClick={() => navigate(`/novo-agendamento/agendamento?id=${v4()}`)}
          variant="blue"
        >
          Avançar
        </Button>
      </div>
    </S.Form>
  );
};
