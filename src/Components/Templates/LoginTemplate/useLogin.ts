import React from "react";

export const useLogin = () => {
  function submiteForm(data) {
    console.log(data);
  }

  return { submiteForm };
};
