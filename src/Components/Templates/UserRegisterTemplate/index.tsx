import React from "react";
import * as S from "./styles";
import { FormUserRegister } from "../../Molecules/FormUserRegister";
import { useUserRegister } from "./useUserRegister";

export const UserRegisterTemplate = () => {
  const { submitForm } = useUserRegister();

  return (
    <S.MyContainer>
      <FormUserRegister submitForm={submitForm} />
    </S.MyContainer>
  );
};
