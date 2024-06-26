import React from "react";
import * as S from "./styles";
import { useFormNewSchedule } from "./useFormNewSchedule";
import { SimpleSelect } from "../../../Atoms/Selects/SimpleSelect";
import { AsyncSimpleSelect } from "../../../Atoms/Selects/AsyncSelect";
import { Button } from "../../../Atoms/Button";

export const FormNewSchedule = () => {
  const {} = useFormNewSchedule();

  return (
    <S.Form>
      <div>
        <SimpleSelect label="Serviço" />
      </div>
      <div>
        <SimpleSelect label="Cidade" />
      </div>
      <div>
        <AsyncSimpleSelect label="Prestador" />
      </div>
      <div>
        <Button variant="blue">Avançar</Button>
      </div>
    </S.Form>
  );
};
