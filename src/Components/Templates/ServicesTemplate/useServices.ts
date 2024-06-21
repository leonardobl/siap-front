import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { useNavigate } from "react-router-dom";
import { Servico } from "../../../Services/Servico";
import { toast } from "react-toastify";
import { useContextSite } from "../../../Context/Context";
import { IServicoDTO } from "../../../Types/servico";
import { IServicoForm } from "../../../Types/servicos";

export const useServices = () => {
  const [filterOpen, setFilterOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const navigate = useNavigate();
  const isMobile = useMediaQuery({ maxWidth: "640px" });
  const { setIsLoad } = useContextSite();
  const [servicos, setServicos] = useState<IServicoDTO[]>([] as IServicoDTO[]);

  function getServicos(data?: IServicoForm) {
    setIsLoad(true);
    Servico.list(data)
      .then(({ data }) => {
        setServicos(data.content);
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

  useEffect(() => {
    getServicos();
  }, []);

  function handleSubmitFilter(data: IServicoForm) {
    if (data?.nome) {
      getServicos(data);
    }
  }

  function handleClean() {
    getServicos();
  }

  return {
    filterOpen,
    setFilterOpen,
    isMobile,
    navigate,
    modalOpen,
    setModalOpen,
    servicos,
    handleSubmitFilter,
    handleClean,
  };
};
