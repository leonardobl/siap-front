import React from "react";
import { IProfissionalForm } from "../../../Types/profissional";
import { toast } from "react-toastify";
import { useContextSite } from "../../../Context/Context";
import { Profissional } from "../../../Services/Profissional";
import { useNavigate } from "react-router-dom";

export const useProfessionalRegister = () => {
  const { setIsLoad } = useContextSite();
  const navigate = useNavigate();

  function handleCancel() {
    navigate(-1);
  }

  function handleSubmitProfessional(data: IProfissionalForm) {
    setIsLoad(true);

    Profissional.create(data)
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
