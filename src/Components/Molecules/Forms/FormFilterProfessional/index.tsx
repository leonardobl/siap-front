import React, { ComponentProps } from "react";
import * as S from "./styles";
import { IProfissionalListProps } from "../../../../Types/profissional";
import { useFormFilterProfessional } from "./useFormFilterProfessional";
import { Input } from "../../../Atoms/Inputs/Input";
import { SimpleSelect } from "../../../Atoms/Selects/SimpleSelect";
import { Button } from "../../../Atoms/Button";
import { ISelectOptions } from "../../../../Types/inputs";

interface IFormFilterProfessionalProps extends ComponentProps<"form"> {
  submitForm: (data: IProfissionalListProps) => void;
}

export const FormFilterProfessional = ({
  submitForm,
  ...rest
}: IFormFilterProfessionalProps) => {
  const {
    control,
    handleSubmit,
    register,
    reset,
    conselhoOptions,
    Controller,
  } = useFormFilterProfessional();

  return (
    <S.Form {...rest} onSubmit={handleSubmit(submitForm)}>
      <div>
        <Input {...register("nome")} label="Nome" id="nome" />
      </div>
      <div>
        <Input {...register("cpf")} label="CPF" id="cpf" maxLength={14} />
      </div>
      <div>
        <Controller
          control={control}
          name="conselho"
          render={({ field: { onChange, value } }) => (
            <SimpleSelect
              options={conselhoOptions}
              label="Conselho"
              isClearable
              value={conselhoOptions.find((i) => i.value === value) || null}
              inputId="conselho"
              onChange={(e: ISelectOptions) => onChange(e?.value)}
            />
          )}
        />
      </div>
      <div>
        <Input
          {...register("numeroConselho")}
          label="Número do Conselho"
          id="numeroConselho"
          type="number"
        />
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
