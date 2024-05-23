import React, { useState } from "react";

import { Input } from "../../Atoms/Inputs/Input";
import { InputLogin } from "../../Atoms/Inputs/InputLogin";
import { InputDate } from "../../Atoms/Inputs/InputDate";
import { SimpleSelect } from "../../Atoms/Selects/SimpleSelect";

export const HomeTemplate = () => {
  const data = [
    {
      value: "Leonardo",
      label: "Leonardo",
    },
    {
      value: "Bernardo",
      label: "Bernardo",
    },
    {
      value: "Lima",
      label: "Lima",
    },
  ];

  return (
    <div>
      <div>HomeTemplate</div>
    </div>
  );
};
