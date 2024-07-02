import React from "react";
import * as S from "./styles";
import { FormSheduleDetail } from "../../Molecules/Forms/FormScheduleDetail";
import { LayoutTemplate } from "../LayoutTemplate";
import { useScheduleDetail } from "./useScheduleDetail";

export const ScheduleDetailTemplate = () => {
  const { agendamento } = useScheduleDetail();

  return (
    <LayoutTemplate titleHeader="Dados do Agendamento">
      <S.Container>
        <FormSheduleDetail agendamento={agendamento} />
      </S.Container>
    </LayoutTemplate>
  );
};
