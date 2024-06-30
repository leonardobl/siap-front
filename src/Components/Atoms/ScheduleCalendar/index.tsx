import { Scheduler } from "@aldabil/react-scheduler";
import React from "react";
import { CardEventSchedule } from "../CardEventSchedule";
import { ptBR } from "date-fns/locale";
import { ProcessedEvent } from "@aldabil/react-scheduler/types";
import * as S from "./styles";

interface IScheduleCalendarProps {
  setValues?: React.Dispatch<React.SetStateAction<ProcessedEvent[]>>;
  values?: ProcessedEvent[];
}

const customLocale = {
  ...ptBR,
  localize: {
    ...ptBR.localize,
    day: (narrowDay) => {
      const dayAbbreviations = [
        "Dom",
        "Seg",
        "Ter",
        "Qua",
        "Qui",
        "Sex",
        "Sáb",
      ];
      return dayAbbreviations[narrowDay];
    },
  },
};

export const ScheduleCalendar = ({
  setValues,
  values,
}: IScheduleCalendarProps) => {
  function handleRemove(id: string | number) {
    setValues((prev) => prev.filter((i) => i.event_id !== id));
  }

  return (
    <S.Container>
      <Scheduler
        view="week"
        month={null}
        editable
        day={null}
        agenda={null}
        selectedDate={new Date()}
        hourFormat="24"
        locale={customLocale}
        eventRenderer={(e) => (
          <CardEventSchedule schedule={e} onRemove={handleRemove} />
        )}
        week={{
          weekDays: [0, 1, 2, 3, 4, 5],
          weekStartOn: 1,
          startHour: 8,
          endHour: 18,
          step: 30,
          navigation: true,
          // cellRenderer: () => <></>,
        }}
        events={values}
        fields={[
          {
            name: "title",
            type: "input",

            config: {
              label: "Título",
              required: false,

              placeholder: "Digite o título",
            },
          },
          {
            name: "start",
            type: "date",
            config: { label: "Início", required: true },
          },
          {
            name: "end",
            type: "date",
            config: { label: "Fim", required: true },
          },
        ]}
      />
    </S.Container>
  );
};
