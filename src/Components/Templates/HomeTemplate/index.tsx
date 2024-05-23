import React, { useState } from "react";

import { Input } from "../../Atoms/Inputs/Input";
import { InputLogin } from "../../Atoms/Inputs/InputLogin";
import { InputDate } from "../../Atoms/Inputs/InputDate";

export const HomeTemplate = () => {
  const [data, setData] = useState(null);

  return (
    <div>
      <div>HomeTemplate</div>

      {/* <br />

      <div style={{ width: "400px" }}>
        <Input label="Leonardo" type="password" />
      </div>

      <br />
      <div style={{ width: "400px" }}>
        <InputLogin
          placeholder="Teste de placeholder"
          iconLeft="/assets/svg/icon-avatar.svg"
        />
      </div>

      <br /> */}
      <br />

      <div style={{ width: "400px" }}>
        <InputDate
          showIcon
          required
          onChange={setData}
          selected={data}
          label="Testset"
          isClearable
        />
      </div>
    </div>
  );
};
