import React from "react";
import { LayoutTemplate } from "../LayoutTemplate";
import { FormNewScheduleDetail } from "../../Molecules/Forms/FormNewScheduleDetail";

export const NewScheduleServiceDetailTemplate = () => {
  return (
    <LayoutTemplate titleHeader="Dados do Agendamento">
      <FormNewScheduleDetail />
    </LayoutTemplate>
  );
};
