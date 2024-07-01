import { Scheduler } from "@aldabil/react-scheduler";
import React from "react";
import { CardEventSchedule } from "../CardEventSchedule";
import {
  CellRenderedProps,
  ProcessedEvent,
} from "@aldabil/react-scheduler/types";
import * as S from "./styles";
import { v4 } from "uuid";
import { useScheduleCalendar } from "./useScheduleCalendar";
import { Button } from "../Button";

interface IScheduleCalendarProps {
  setValues?: React.Dispatch<React.SetStateAction<ProcessedEvent[]>>;
  values?: ProcessedEvent[];
  onRemoveItem: (id: number | string) => void;
}

export const ScheduleCalendar = ({
  setValues,
  values,
  onRemoveItem,
}: IScheduleCalendarProps) => {
  const { customLocale, disabledHours } = useScheduleCalendar();

  return (
    <S.Container>
      <Button>Salvar</Button>
      <Scheduler
        view="week"
        month={null}
        day={null}
        agenda={null}
        hourFormat="24"
        locale={customLocale}
        eventRenderer={(e) => {
          return <CardEventSchedule schedule={e} onRemove={onRemoveItem} />;
        }}
        week={{
          weekDays: [0, 1, 2, 3, 4, 5],
          weekStartOn: 1,
          startHour: 7,
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
                  minHeight: "60px",
                  background: disabled ? "#eee" : "transparent",
                  cursor: disabled ? "not-allowed" : "pointer",
                }}
                onClick={() => {
                  if (disabled) return;

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
