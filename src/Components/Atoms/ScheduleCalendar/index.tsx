import { Scheduler } from "@aldabil/react-scheduler";
import React, { useEffect, useState } from "react";
import { CardEventSchedule } from "../CardEventSchedule";
import { ptBR } from "date-fns/locale";
import {
  CellRenderedProps,
  ProcessedEvent,
} from "@aldabil/react-scheduler/types";
import * as S from "./styles";
import { v4 } from "uuid";

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
  const [disabledHours, setDisabledHours] = useState<{
    [key: string]: string[];
  }>({});

  useEffect(() => {
    const today = new Date();
    const daysOfWeek = Array.from({ length: 7 }, (_, i) => {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      return date.toISOString().split("T")[0];
    });

    const newDisabledHours = daysOfWeek.reduce((acc, day) => {
      acc[day] =
        day === today.toISOString().split("T")[0]
          ? ["10:30", "15:00"]
          : generateRandomDisabledHours();
      return acc;
    }, {});

    setDisabledHours(newDisabledHours);
  }, []);

  function handleRemove(id: string | number) {
    setValues((prev) => prev.filter((i) => i.event_id !== id));
  }

  const generateRandomDisabledHours = () => {
    const hours = [];
    for (let i = 0; i < 5; i++) {
      const randomHour = Math.floor(Math.random() * (18 - 8 + 1)) + 8;
      const randomMinute = Math.random() > 0.5 ? 0 : 30;
      hours.push(`${randomHour}:${randomMinute === 0 ? "00" : "30"}`);
    }
    return hours;
  };

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
        eventRenderer={(e) => {
          return <CardEventSchedule schedule={e} onRemove={handleRemove} />;
        }}
        week={{
          weekDays: [0, 1, 2, 3, 4, 5],
          weekStartOn: 1,
          startHour: 8,
          endHour: 18,
          step: 30,
          navigation: true,
          cellRenderer: ({
            height,
            start,
            end,
            onClick,
            day,
            ...props
          }: CellRenderedProps) => {
            const date = start.toISOString().split("T")[0];
            const time = `${start.getHours()}:${
              start.getMinutes() === 0 ? "00" : start.getMinutes()
            }`;
            const disabled = disabledHours[date]?.includes(time);
            const restProps = disabled ? {} : props;

            return (
              <div
                style={{
                  height: "100%",
                  background: disabled ? "#eee" : "transparent",
                  cursor: disabled ? "not-allowed" : "pointer",
                }}
                onClick={() => {
                  if (disabled) {
                    return alert("Opss, horário desativado");
                  }

                  const newDate: ProcessedEvent = {
                    event_id: v4(),
                    start,
                    end,
                    title: "",
                  };

                  setValues((prev) => [...prev, newDate]);
                  // onClick();
                }}
                {...restProps}
              ></div>
            );
          },
        }}
        events={values}
      />
    </S.Container>
  );
};
