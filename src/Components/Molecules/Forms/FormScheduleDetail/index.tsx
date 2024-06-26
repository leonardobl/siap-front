import React from "react";
import * as S from "./styles";
import { Input } from "../../../Atoms/Inputs/Input";
import { InputFile } from "../../../Atoms/Inputs/InputFile";
import { useFormSheduleDetail } from "./useFormSheduleDetail";
import { MyModal } from "../../../Atoms/Modal";
import { IFileCustom } from "../../../Atoms/Inputs/InputFile/useInputFile";
import { Button } from "../../../Atoms/Button";

export const FormSheduleDetail = () => {
  const {
    file,
    setFile,
    modalOpen,
    setModalOpen,
    fileTemp,
    setFileTemp,
    handleInsertFile,
  } = useFormSheduleDetail();

  return (
    <S.Form>
      <div>
        <Input value={"Agendado"} label="Status" disabled />
      </div>
      <div>
        <Input value={"Exame Médico"} label="Serviço" disabled />
      </div>
      <div>
        <Input value={"Clínica Realtran"} label="Prestador" disabled />
      </div>
      <div>
        <Input value={"22.760.430/0001- 63"} label="CNPJ" disabled />
      </div>
      <div>
        <Input
          value={"R. Cornélius, 174 - Realengo, Rio de Janeiro - RJ"}
          label="Endereço"
          disabled
        />
      </div>
      <div>
        <Input value={"(21) 3226-4064"} label="Telefone" disabled />
      </div>
      <div>
        <Input value={"Estacio Neto"} label="Profissional" disabled />
      </div>
      <div>
        <Input value={"123456 CRN/RJ"} label="Conselho" disabled />
      </div>
      <div>
        <Input value={"1234"} label="Número do Conselho" disabled />
      </div>
      <div>
        <Input value={"RJ"} label="UF Conselho" disabled />
      </div>
      <div>
        <Input
          value={"15/06/2024"}
          label="Data"
          disabled
          iconright="/assets/svg/icon-clock-gray.svg"
        />
      </div>
      <div>
        <Input
          value={"14:00"}
          label="Horário"
          disabled
          iconright="/assets/svg/icon-calendar-gray.svg"
        />
      </div>

      <div>
        <S.ButtonFile
          type="button"
          onClick={() => {
            if (fileTemp) return;
            setModalOpen(true);
          }}
        >
          {fileTemp && (
            <img src="/assets/svg/icon-check-green.svg" alt="icon anexado" />
          )}
          {fileTemp ? "Laudo Anexado" : "Adicionar Laudo"}
        </S.ButtonFile>
      </div>

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
