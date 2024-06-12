import React, { ComponentProps } from "react";
import * as S from "./styles";
import { Input } from "../../../Atoms/Inputs/Input";
import { Button } from "../../../Atoms/Button";
import { useFormFilterServices } from "./useFormFilterServices";
import { IServicosListProps } from "../../../../Types/servicos";

interface IFormFilterServicesProps extends ComponentProps<"form"> {
  submitForm: (data: IServicosListProps) => void;
}

export const FormFilterServices = ({
  submitForm,
  ...rest
}: IFormFilterServicesProps) => {
  const { handleSubmit, register, reset } = useFormFilterServices();

  return (
    <S.Form {...rest} onSubmit={handleSubmit(submitForm)}>
      <div>
        <Input {...register("nome")} label="Serviços" id="servicos" />
      </div>
      <div>
        <Button type="reset" onClick={() => reset()}>
          Limpar
        </Button>
        <Button variant="blue">Buscar</Button>
      </div>
    </S.Form>
  );
};
