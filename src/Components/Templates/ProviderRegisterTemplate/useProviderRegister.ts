import React, { useState } from "react";

export const useProviderRegister = () => {
  const [tabIdx, setTabIdx] = useState(1);

  return { tabIdx, setTabIdx };
};
