import { ProcessedEvent } from "@aldabil/react-scheduler/types";
import React, { useState } from "react";

let events = [
  {
    event_id: 1,
    title: "",
    start: new Date("2024/6/24 09:30"),
    end: new Date("2024/6/24 12:15"),
  },

  {
    event_id: 2,
    title: "",
    start: new Date("2024/6/25 10:00"),
    end: new Date("2024/6/25 11:00"),
  },
];

export const useProfessionalSchedule = () => {
  const [schedules, setSchedules] = useState<ProcessedEvent[]>(events);

  function handleRemove(id: string | number) {
    setSchedules((prev) => prev.filter((i) => i.event_id !== id));
  }

  return { handleRemove, schedules, setSchedules };
};
