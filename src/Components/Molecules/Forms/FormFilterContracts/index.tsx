import React, { ComponentProps } from "react";
import * as S from "./styles";
import { Input } from "../../../Atoms/Inputs/Input";
import { InputDate } from "../../../Atoms/Inputs/InputDate";
import { Button } from "../../../Atoms/Button";
import { useFormFilterContracts } from "./useFormFilterContracts";
import { IContratoListProps } from "../../../../Types/contrato";
import { reverseToIsoDate } from "../../../../Utils/dateTransform";

interface IFormFilterContractsProps extends ComponentProps<"form"> {
  submitForm: (data: IContratoListProps) => void;
}

export const FormFilterContracts = ({
  submitForm,
  ...rest
}: IFormFilterContractsProps) => {
  const {
    dataFinal,
    dataInicial,
    setDataFinal,
    setDataInicial,
    Controller,
    control,
    handleSubmit,
    reset,
    register,
  } = useFormFilterContracts();

  return (
    <S.Form {...rest} onSubmit={handleSubmit(submitForm)}>
      <div>
        <Input {...register("nome")} label="Nome Fantasia" id="nome" />
      </div>
      <div>
        <Input {...register("razaoSocial")} label="Razão Social" id="social" />
      </div>
      <div>
        <Input {...register("cnpj")} label="CNPJ" id="cnpj" maxLength={18} />
      </div>
      <div>
        <Input {...register("servico")} label="Serviço" id="servico" />
      </div>
      <div>
        <Controller
          control={control}
          name="dataInicio"
          render={({ field: { onChange } }) => (
            <InputDate
              showIcon
              selected={dataInicial}
              id="inicial"
              isClearable
              label="Data Inicial"
              onChange={(e) => {
                setDataInicial(e);
                onChange(reverseToIsoDate(e.toLocaleDateString()));
              }}
            />
          )}
        />
      </div>

      <div>
        <Controller
          control={control}
          name="dataFim"
          render={({ field: { onChange } }) => (
            <InputDate
              selected={dataFinal}
              showIcon
              isClearable
              id="final"
              label="Data final"
              onChange={(e) => {
                setDataFinal(e);
                onChange(reverseToIsoDate(e.toLocaleDateString()));
              }}
            />
          )}
        />
      </div>

      <div>
        <Button
          type="reset"
          onClick={() => {
            reset();
            setDataFinal(null);
            setDataInicial(null);
          }}
        >
          Limpar
        </Button>
        <Button variant="blue">Buscar</Button>
      </div>
    </S.Form>
  );
};
