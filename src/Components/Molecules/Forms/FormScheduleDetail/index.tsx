import React, { ComponentProps } from "react";
import * as S from "./styles";
import { Input } from "../../../Atoms/Inputs/Input";
import { InputFile } from "../../../Atoms/Inputs/InputFile";
import { useFormSheduleDetail } from "./useFormSheduleDetail";
import { MyModal } from "../../../Atoms/Modal";
import { Button } from "../../../Atoms/Button";
import { IAgendamentoDTO } from "../../../../Types/agendamento";
import { removeUnderscoreAndCapitalize } from "../../../../Utils/removeUnderscoreAndCapitalize";
import { StatusAgendamento } from "../../Lists/ScheduleList/styles";
import { StatusAgendamentoEnum } from "../../../../Enum/statusAgendamento";
import { reverseToBrDate } from "../../../../Utils/dateTransform";

interface IFormSheduleDetailProps extends ComponentProps<"form"> {
  agendamento: IAgendamentoDTO;
}

export const FormSheduleDetail = ({
  agendamento,
  ...rest
}: IFormSheduleDetailProps) => {
  const {
    file,
    setFile,
    modalOpen,
    setModalOpen,
    fileTemp,
    setFileTemp,
    isNewSchedule,
    handleInsertFile,
    isProfessional,
  } = useFormSheduleDetail();

  return (
    <S.Form {...rest}>
      <div>
        <Input
          value={removeUnderscoreAndCapitalize(agendamento?.status) || "---"}
          label="Status"
          disabled
        />
      </div>
      <div>
        <Input
          value={agendamento?.servico?.nome || "---"}
          label="Serviço"
          disabled
        />
      </div>
      <div>
        <Input
          value={agendamento?.prestador?.nome || "---"}
          label="Prestador"
          disabled
        />
      </div>
      <div>
        <Input
          value={agendamento?.prestador?.cnpj || "---"}
          label="CNPJ"
          disabled
        />
      </div>
      <div>
        <Input
          value={`${agendamento?.prestador?.endereco?.logradouro || "---"}, ${
            agendamento?.prestador?.endereco?.numero || "---"
          } - ${agendamento?.prestador?.endereco?.bairro || "---"}, ${
            agendamento?.prestador?.endereco?.cidade?.nome || "---"
          }`}
          label="Endereço"
          disabled
        />
      </div>
      <div>
        <Input
          value={agendamento?.prestador?.telefone || "---"}
          label="Telefone"
          disabled
        />
      </div>
      <div>
        <Input
          value={agendamento?.profissional?.nome || "---"}
          label="Profissional"
          disabled
        />
      </div>
      <div>
        <Input
          value={`${agendamento?.profissional?.conselho || "---"} / ${
            agendamento?.profissional?.ufConselho || "---"
          }`}
          label="Conselho"
          disabled
        />
      </div>
      <div>
        <Input
          value={agendamento?.profissional?.numeroConselho || "---"}
          label="Número do Conselho"
          disabled
        />
      </div>
      <div>
        <Input
          value={agendamento?.profissional?.ufConselho || "---"}
          label="UF Conselho"
          disabled
        />
      </div>
      <div>
        <Input
          value={reverseToBrDate(agendamento?.diaAgendado) || "---"}
          label="Data"
          disabled
          iconright="/assets/svg/icon-clock-gray.svg"
        />
      </div>
      <div>
        <Input
          value={agendamento.horaAgendada || "---"}
          label="Horário"
          disabled
          iconright="/assets/svg/icon-calendar-gray.svg"
        />
      </div>

      {isProfessional &&
        agendamento.status === StatusAgendamentoEnum.AGENDADO && (
          <S.WrapperButtons>
            <S.ButtonFile
              type="button"
              onClick={() => {
                if (fileTemp) return;
                setModalOpen(true);
              }}
            >
              {fileTemp && (
                <img
                  src="/assets/svg/icon-check-green.svg"
                  alt="icon anexado"
                />
              )}
              {fileTemp ? "Laudo Anexado" : "Adicionar Laudo"}
            </S.ButtonFile>

            {isNewSchedule && (
              <Button variant="blue">Emitir Nota Fiscal</Button>
            )}
          </S.WrapperButtons>
        )}

      <MyModal isOpen={modalOpen} onRequestClose={() => setModalOpen(false)}>
        <S.WrapperContentModal>
          <S.HeaderModal>
            <img
              src="/assets/svg/icon-close-gray.svg"
              alt="icone close"
              onClick={() => setModalOpen(false)}
            />
          </S.HeaderModal>
          <S.ContentModal>
            <h2>Anexar Laudo</h2>

            <div>
              <InputFile onChange={setFile} fileTypes={["jpg"]} />
            </div>

            <S.WrapperButtonModal>
              <Button variant="blue" type="button" onClick={handleInsertFile}>
                Concluir
              </Button>
            </S.WrapperButtonModal>
          </S.ContentModal>
        </S.WrapperContentModal>
      </MyModal>
    </S.Form>
  );
};
