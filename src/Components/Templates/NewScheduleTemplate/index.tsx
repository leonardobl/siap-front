import React from "react";
import { LayoutTemplate } from "../LayoutTemplate";
import { FormNewSchedule } from "../../Molecules/Forms/FormNewSchedule";

export const NewScheduleTemplate = () => {
  return (
    <LayoutTemplate titleHeader="Novo Agendamento">
      <FormNewSchedule />
    </LayoutTemplate>
  );
};
