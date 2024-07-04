import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import { useLocalStorage } from "../../../../Hooks/useSessionStorage";
import { RolesEnum } from "../../../../Enum/roles";

export const useFormSheduleDetail = () => {
  const [file, setFile] = useState<File | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [fileTemp, setFileTemp] = useState<File | null>(null);
  const location = useLocation();
  const isNewSchedule = location.pathname.includes("novo-agendamento");
  const [dataUser] = useLocalStorage("datauser");
  const isProfessional = dataUser?.roles?.includes(RolesEnum.PROFISSIONAL);

  function handleInsertFile() {
    if (file) {
      setFileTemp(file);
      setModalOpen(false);

      return;
    }

    toast.info("Você precisa anexar um arquivo");
  }

  return {
    file,
    setFile,
    modalOpen,
    setModalOpen,
    fileTemp,
    setFileTemp,
    handleInsertFile,
    isNewSchedule,
    isProfessional,
  };
};
