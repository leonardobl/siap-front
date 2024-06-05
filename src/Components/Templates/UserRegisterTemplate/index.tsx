import React from "react";
import { useUserRegister } from "./useUserRegister";
import { LayoutNoLogin } from "../LayoutNoLogin";
import * as S from "./styles";
import { FormUserRegister } from "../../Molecules/Forms/FormUserRegister";

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
