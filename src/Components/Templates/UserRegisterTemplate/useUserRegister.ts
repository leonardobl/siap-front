import React from "react";

export const useUserRegister = () => {
  function submitForm(data) {
    console.log(data);
  }

  return { submitForm };
};
