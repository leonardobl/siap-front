import React from "react";
import { LayoutTemplate } from "../LayoutTemplate";
import { FormNewScheduleDetail } from "../../Molecules/Forms/FormNewScheduleDetail";

export const NewScheduleDetailTemplate = () => {
  return (
    <LayoutTemplate titleHeader="Dados do Agendamento">
      <FormNewScheduleDetail />
    </LayoutTemplate>
  );
};
