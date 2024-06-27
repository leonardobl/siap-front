import React from "react";
import { LayoutTemplate } from "../LayoutTemplate";
import { FormNewSchedule } from "../../Molecules/Forms/FormNewSchedule";
import { useNewSchedule } from "./useNewSchedule";

export const NewScheduleTemplate = () => {
  const { handleSubmit } = useNewSchedule();
  return (
    <LayoutTemplate titleHeader="Novo Agendamento">
      <FormNewSchedule submitForm={handleSubmit} />
    </LayoutTemplate>
  );
};
