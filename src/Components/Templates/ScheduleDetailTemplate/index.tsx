import React from "react";
import * as S from "./styles";
import { FormSheduleDetail } from "../../Molecules/Forms/FormScheduleDetail";
import { LayoutTemplate } from "../LayoutTemplate";

export const ScheduleDetailTemplate = () => {
  return (
    <LayoutTemplate>
      <S.Container>
        <FormSheduleDetail />
      </S.Container>
    </LayoutTemplate>
  );
};
