import React from "react";
import { LayoutTemplate } from "../../Templates/LayoutTemplate";
import * as S from "./styles";
import { ScheduleCalendar } from "../../Atoms/ScheduleCalendar";
import { useProfessionalSchedule } from "./useProfessionalSchedule";

export const ProfessionalScheduleTemplete = () => {
  const { handleRemove, schedules, setSchedules } = useProfessionalSchedule();

  return (
    <LayoutTemplate titleHeader="Agenda">
      <S.Container>
        <S.WrapperCalendar>
          <ScheduleCalendar
            onRemoveItem={handleRemove}
            values={schedules}
            setValues={setSchedules}
          />
        </S.WrapperCalendar>
      </S.Container>
    </LayoutTemplate>
  );
};
