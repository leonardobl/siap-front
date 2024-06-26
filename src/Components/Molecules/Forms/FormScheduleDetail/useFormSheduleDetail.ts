import React, { useState } from "react";
import { toast } from "react-toastify";

export const useFormSheduleDetail = () => {
  const [file, setFile] = useState<File | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [fileTemp, setFileTemp] = useState<File | null>(null);

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
  };
};
