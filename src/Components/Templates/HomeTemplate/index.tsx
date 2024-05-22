import React, { useState } from "react";
import { Input } from "../../Atoms/Inputs/Input";

export const HomeTemplate = () => {
  const [m, setM] = useState("");
  return (
    <div>
      <div>HomeTemplate</div>

      <br />
      <Input
        required
        type="password"
        label="Teste"
        value={m}
        onChange={(e) => setM(e.target.value)}
      />
    </div>
  );
};
