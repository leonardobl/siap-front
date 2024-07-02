import React from "react";
import { LayoutTemplate } from "../LayoutTemplate";
import { FormSchedule } from "../../Molecules/Forms/FormSchedule";
import { useSchedule } from "./useSchedule";

export const ScheduleTemplate = () => {
  const { handleSubmit } = useSchedule();

  return (
    <LayoutTemplate titleHeader="Agendamento">
      <FormSchedule formSubmit={handleSubmit} />
    </LayoutTemplate>
  );
};
