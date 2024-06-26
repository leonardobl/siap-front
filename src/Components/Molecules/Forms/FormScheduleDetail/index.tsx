import React from "react";
import * as S from "./styles";
import { Input } from "../../../Atoms/Inputs/Input";

export const FormSheduleDetail = () => {
  return (
    <S.Form>
      <div>
        <Input value={"Agendado"} label="Status" disabled />
      </div>
      <div>
        <Input value={"Exame Médico"} label="Serviço" disabled />
      </div>
      <div>
        <Input value={"Clínica Realtran"} label="Prestador" disabled />
      </div>
      <div>
        <Input value={"22.760.430/0001- 63"} label="CNPJ" disabled />
      </div>
      <div>
        <Input
          value={"R. Cornélius, 174 - Realengo, Rio de Janeiro - RJ"}
          label="Endereço"
          disabled
        />
      </div>
      <div>
        <Input value={"(21) 3226-4064"} label="Telefone" disabled />
      </div>
      <div>
        <Input value={"Estacio Neto"} label="Profissional" disabled />
      </div>
      <div>
        <Input value={"123456 CRN/RJ"} label="Conselho" disabled />
      </div>
      <div>
        <Input value={"1234"} label="Número do Conselho" disabled />
      </div>
      <div>
        <Input value={"RJ"} label="UF Conselho" disabled />
      </div>
      <div>
        <Input
          value={"15/06/2024"}
          label="Data"
          disabled
          iconright="/assets/svg/icon-clock-gray.svg"
        />
      </div>
      <div>
        <Input
          value={"14:00"}
          label="Horário"
          disabled
          iconright="/assets/svg/icon-calendar-gray.svg"
        />
      </div>

      <div></div>
    </S.Form>
  );
};
