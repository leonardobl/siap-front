import { EventRendererProps } from "@aldabil/react-scheduler/types";
import React, { ComponentProps } from "react";
import * as S from "./styles";

interface ICardEventSchedulePrps extends ComponentProps<"div"> {
  schedule: EventRendererProps;
  onRemove: (id: number | string) => void;
}

export const CardEventSchedule = ({
  schedule,
  onRemove,
  ...rest
}: ICardEventSchedulePrps) => {
  return (
    <S.Card {...rest}>
      <S.CardClose>
        <span onClick={() => onRemove(schedule.event.event_id)}>X</span>
      </S.CardClose>

      <S.CardDates>
        <p>
          {new Date(schedule.event.start).toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })}{" "}
          -{" "}
          {new Date(schedule.event.end).toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </p>
      </S.CardDates>
    </S.Card>
  );
};
