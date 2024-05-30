import React from "react";
import { FormLogin } from "../../Molecules/FormLogin";
import { useLogin } from "./useLogin";
import { LayoutNoLogin } from "../LayoutNoLogin";

export const LoginTemplate = () => {
  const { submiteForm } = useLogin();

  return (
    <LayoutNoLogin>
      <FormLogin submiteForm={submiteForm} />
    </LayoutNoLogin>
  );
};
