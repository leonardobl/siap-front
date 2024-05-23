import React from "react";

import { Input } from "../../Atoms/Inputs/Input";
import { InputLogin } from "../../Atoms/Inputs/InputLogin";

export const HomeTemplate = () => {
  return (
    <div>
      <div>HomeTemplate</div>

      <br />

      <div style={{ width: "200px" }}>
        <Input label="Leonardo" type="password" />
      </div>

      <br />
      <div style={{ width: "200px" }}>
        <InputLogin
          placeholder="Teste de placeholder"
          iconLeft="/assets/svg/icon-avatar.svg"
        />
      </div>
    </div>
  );
};
