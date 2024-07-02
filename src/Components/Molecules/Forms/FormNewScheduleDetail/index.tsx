import React, { ComponentProps } from "react";
import * as S from "./styles";
import { Input } from "../../../Atoms/Inputs/Input";
import { Button } from "../../../Atoms/Button";
import { useFormNewScheduleDetail } from "./useFormNewScheduleDetail";
import { IAgendamentoDTO } from "../../../../Types/agendamento";

interface IFormNewScheduleDetailProps extends ComponentProps<"form"> {
  agendamento: IAgendamentoDTO;
}

export const FormNewScheduleDetail = ({
  agendamento,
  ...rest
}: IFormNewScheduleDetailProps) => {
  const { navigate } = useFormNewScheduleDetail();
  return (
    <S.Form {...rest}>
      <div>
        <Input
          label="Serviço"
          value={agendamento?.servico?.nome || "---"}
          disabled
        />
      </div>
      <div>
        <Input label="Cidade" value={"FAVOR IMPLEMENTAR"} disabled />
      </div>
      <div>
        <Input
          label="Prestador"
          value={`${agendamento?.prestador?.nome || "---"} - ${
            agendamento?.prestador?.cnpj || "---"
          } - ${agendamento?.prestador?.razaoSocial || "---"}`}
          disabled
        />
      </div>
      <div>
        <Input
          label="Endereço"
          value={`${agendamento?.prestador?.endereco?.logradouro || "---"}, ${
            agendamento?.prestador?.endereco?.numero || "---"
          } - ${agendamento?.prestador?.endereco?.bairro || "---"}, ${
            agendamento?.prestador?.endereco?.cidade?.nome || "---"
          }`}
          disabled
        />
      </div>
      <div>
        <Input
          label="CNPJ"
          value={`${agendamento?.prestador?.cnpj || "---"}`}
          disabled
        />
      </div>
      <div>
        <Input
          label="Telefone"
          value={`${agendamento?.prestador?.telefone || "---"}`}
          disabled
        />
      </div>
      <div>
        <Input
          label="E-mail"
          value={`${agendamento?.prestador?.email}` || "---"}
          disabled
        />
      </div>
      <div>
        <Button
          variant="blue"
          disabled={!!!agendamento?.uuid}
          onClick={() => {
            navigate(`/novo-agendamento/pagamento?id=${agendamento?.uuid}`);
          }}
        >
          Avançar
        </Button>
      </div>
    </S.Form>
  );
};
