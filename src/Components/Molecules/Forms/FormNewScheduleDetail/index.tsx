import React from "react";
import * as S from "./styles";
import { Input } from "../../../Atoms/Inputs/Input";
import { Button } from "../../../Atoms/Button";

export const FormNewScheduleDetail = () => {
  return (
    <S.Form>
      <div>
        <Input label="Serviço" value={"Exame Médico"} disabled />
      </div>
      <div>
        <Input label="Cidade" value={"Rio de Janeiro"} disabled />
      </div>
      <div>
        <Input
          label="Prestador"
          value={"Clínica Realtan - 22.760.430/0001- 63 - Razão Social "}
          disabled
        />
      </div>
      <div>
        <Input
          label="Endereço"
          value={"R. Cornélius, 174 - Realengo,Rio de Janeiro"}
          disabled
        />
      </div>
      <div>
        <Input label="CNPJ" value={"22.760.430/0001- 63"} disabled />
      </div>
      <div>
        <Input label="Telefone" value={"(21) 3226-4064"} disabled />
      </div>
      <div>
        <Input label="E-mail" value={"clinicarealtran@gmail.com"} disabled />
      </div>
      <div>
        <Button variant="blue">Avançar</Button>
      </div>
    </S.Form>
  );
};
