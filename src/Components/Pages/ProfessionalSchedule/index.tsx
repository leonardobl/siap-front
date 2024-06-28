import React from "react";
import { LayoutTemplate } from "../../Templates/LayoutTemplate";
import * as S from "./styles";
import { InputDate } from "../../Atoms/Inputs/InputDate";

export const ProfessionalSchedule = () => {
  return (
    <LayoutTemplate titleHeader="Agenda ">
      <S.Container>
        <div>
          <InputDate onChange={() => ""} showWeekPicker showWeekNumbers />
        </div>

        <S.WrapperCalendar></S.WrapperCalendar>
      </S.Container>
    </LayoutTemplate>
  );
};
