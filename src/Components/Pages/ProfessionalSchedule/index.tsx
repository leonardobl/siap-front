import React, { useState } from "react";
import { LayoutTemplate } from "../../Templates/LayoutTemplate";
import * as S from "./styles";
import { ScheduleCalendar } from "../../Atoms/ScheduleCalendar";
import { ProcessedEvent } from "@aldabil/react-scheduler/types";
import { colors } from "react-select/dist/declarations/src/theme";

let events = [
  {
    event_id: 1,
    title: "",
    start: new Date("2024/6/24 09:30"),
    end: new Date("2024/6/24 12:15"),
    color: "#ff0000",
  },

  {
    event_id: 2,
    title: "",
    start: new Date("2024/6/25 10:00"),
    end: new Date("2024/6/25 11:00"),
    colors: "red",
  },
];

export const ProfessionalSchedule = () => {
  const [schedules, setSchedules] = useState<ProcessedEvent[]>(events);

  return (
    <LayoutTemplate titleHeader="Agenda">
      <S.Container>
        <S.WrapperCalendar>
          <ScheduleCalendar values={schedules} setValues={setSchedules} />
        </S.WrapperCalendar>
      </S.Container>
    </LayoutTemplate>
  );
};
