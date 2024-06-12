import React from "react";
import * as S from "./styles";
import { Input } from "../../../Atoms/Inputs/Input";
import { Button } from "../../../Atoms/Button";

export const FormFilterServices = () => {
  return (
    <S.Form>
      <div>
        <Input label="Serviços" id="servicos" />
      </div>

      <div>
        <Button>Limpar</Button>
        <Button variant="blue">Buscar</Button>
      </div>
    </S.Form>
  );
};
