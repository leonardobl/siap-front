import React from "react";
import { LayoutTemplate } from "../LayoutTemplate";
import { FormSchedule } from "../../Molecules/Forms/FormSchedule";

export const ScheduleTemplate = () => {
  return (
    <LayoutTemplate titleHeader="Agendamento">
      <FormSchedule formSubmit={() => ""} />
    </LayoutTemplate>
  );
};
