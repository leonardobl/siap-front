import React from "react";
import { useLogin } from "./useLogin";
import { LayoutNoLogin } from "../LayoutNoLogin";
import { FormLogin } from "../../Molecules/Forms/FormLogin";

export const LoginTemplate = () => {
  const { submiteForm } = useLogin();

  return (
    <LayoutNoLogin>
      <FormLogin submiteForm={submiteForm} />
    </LayoutNoLogin>
  );
};
