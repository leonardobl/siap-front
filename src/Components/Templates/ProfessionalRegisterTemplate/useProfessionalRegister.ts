import React from "react";
import { IProfissionalForm } from "../../../Types/profissional";
import { toast } from "react-toastify";
import { useContextSite } from "../../../Context/Context";
import { Profissional } from "../../../Services/Profissional";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "../../../Hooks/useSessionStorage";

export const useProfessionalRegister = () => {
  const { setIsLoad } = useContextSite();
  const navigate = useNavigate();
  const [dataUser] = useLocalStorage("dataUser");

  function handleCancel() {
    navigate(-1);
  }

  function handleSubmitProfessional(data: IProfissionalForm) {
    setIsLoad(true);

    const PAYLOAD: IProfissionalForm = {
      ...data,
      uuidPrestador: dataUser.uuidUsuario,
    };

    Profissional.create(PAYLOAD)
      .then(({ data }) => {
        navigate(`/profissionais/cadastro/detalhe?id=${data.uuid}`);
      })
      .catch(
        ({
          response: {
            data: { mensagem },
          },
        }) => toast.error(mensagem)
      )
      .finally(() => {
        setIsLoad(false);
      });
  }

  return { handleSubmitProfessional, handleCancel };
};
