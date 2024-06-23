import React, { ComponentProps } from "react";
import * as S from "./styles";
import { Input } from "../../../Atoms/Inputs/Input";
import { Button } from "../../../Atoms/Button";
import { useFormFilterServices } from "./useFormFilterServices";
import { IServicoForm } from "../../../../Types/servico";

interface IFormFilterServicesProps extends ComponentProps<"form"> {
  submitForm: (data: IServicoForm) => void;
  onClean?: () => void;
}

export const FormFilterServices = ({
  submitForm,
  onClean,
  ...rest
}: IFormFilterServicesProps) => {
  const { handleSubmit, register, reset } = useFormFilterServices();

  return (
    <S.Form {...rest} onSubmit={handleSubmit(submitForm)}>
      <div>
        <Input {...register("nome")} label="Serviços" id="servicos" />
      </div>
      <div>
        <Button
          type="reset"
          onClick={() => {
            reset();
            onClean && onClean();
          }}
        >
          Limpar
        </Button>
        <Button variant="blue">Buscar</Button>
      </div>
    </S.Form>
  );
};
