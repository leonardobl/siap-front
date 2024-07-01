import React, { useEffect, useState } from "react";
import { ptBR } from "date-fns/locale";

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

export const useScheduleCalendar = () => {
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

  const generateRandomDisabledHours = () => {
    const hours = [];
    for (let i = 0; i < 5; i++) {
      const randomHour = Math.floor(Math.random() * (18 - 8 + 1)) + 8;
      const randomMinute = Math.random() > 0.5 ? 0 : 30;
      hours.push(`${randomHour}:${randomMinute === 0 ? "00" : "30"}`);
    }
    return hours;
  };

  return { disabledHours, customLocale };
};
