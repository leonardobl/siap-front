import React from "react";
import { LayoutTemplate } from "../../Templates/LayoutTemplate";
import * as S from "./styles";
import { InputDate } from "../../Atoms/Inputs/InputDate";
import { Scheduler } from "@aldabil/react-scheduler";
import { ptBR } from "date-fns/locale";

export const ProfessionalSchedule = () => {
  return (
    <LayoutTemplate titleHeader="Agenda ">
      <S.Container>
        {/* <div>
          <InputDate onChange={() => ""} showWeekPicker showWeekNumbers />
        </div> */}

        <S.WrapperCalendar>
          <Scheduler
            view="week"
            month={null}
            // day={null}
            agenda={null}
            locale={ptBR}
            week={{
              weekDays: [0, 1, 2, 3, 4, 5, 6],
              weekStartOn: 1,
              startHour: 8,
              endHour: 18,
              step: 30,
              cellRenderer: () => <></>,
            }}
            day={{
              startHour: 7,
              endHour: 22,
              step: 30,
              cellRenderer: () => <></>,
            }}
            events={
              [
                // {
                //   event_id: 1,
                //   title: "Event 1",
                //   start: new Date("2021/5/2 09:30"),
                //   end: new Date("2021/5/2 10:30"),
                // },
                // {
                //   event_id: 2,
                //   title: "Event 2",
                //   start: new Date("2021/5/4 10:00"),
                //   end: new Date("2021/5/4 11:00"),
                // },
              ]
            }
          />
        </S.WrapperCalendar>
      </S.Container>
    </LayoutTemplate>
  );
};
