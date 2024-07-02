import React from "react";
import { LayoutTemplate } from "../LayoutTemplate";
import { FormNewScheduleDetail } from "../../Molecules/Forms/FormNewScheduleDetail";
import { useNewScheduleServiceDetail } from "./useNewScheduleServiceDetail";

export const NewScheduleServiceDetailTemplate = () => {
  const { agendamento } = useNewScheduleServiceDetail();

  return (
    <LayoutTemplate titleHeader="Dados do Agendamento">
      <FormNewScheduleDetail agendamento={agendamento} />
    </LayoutTemplate>
  );
};
