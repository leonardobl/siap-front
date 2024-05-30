import React from "react";
import { FormUserRegister } from "../../Molecules/FormUserRegister";
import { useUserRegister } from "./useUserRegister";
import { LayoutNoLogin } from "../LayoutNoLogin";
import * as S from "./styles";

export const UserRegisterTemplate = () => {
  const { submitForm } = useUserRegister();

  return (
    <LayoutNoLogin>
      <S.Container>
        <FormUserRegister submitForm={submitForm} />
      </S.Container>
    </LayoutNoLogin>
  );
};
