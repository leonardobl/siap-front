import React from "react";
import { LayoutTemplate } from "../LayoutTemplate";
import { useNewSchedule } from "./useNewSchedule";
import { FormNewScheduleService } from "../../Molecules/Forms/FormNewScheduleService";

export const NewScheduleServiceTemplate = () => {
  const { handleSubmit } = useNewSchedule();
  return (
    <LayoutTemplate titleHeader="Novo Agendamento">
      <FormNewScheduleService submitForm={handleSubmit} />
    </LayoutTemplate>
  );
};
