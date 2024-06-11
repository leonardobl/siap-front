import React, { useState } from "react";

export const useTabProviderForm = () => {
  const [tabIdx, setTabIdx] = useState(1);
  return { tabIdx, setTabIdx };
};
