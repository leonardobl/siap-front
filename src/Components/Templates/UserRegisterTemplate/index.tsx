import React from "react";
import * as S from "./styles";
import { FormUserRegister } from "../../Molecules/FormUserRegister";

export const UserRegisterTemplate = () => {
  return (
    <S.MyContainer>
      <FormUserRegister
        submitForm={() => {
          throw new Error("Deve ser implementado");
        }}
      />
    </S.MyContainer>
  );
};
