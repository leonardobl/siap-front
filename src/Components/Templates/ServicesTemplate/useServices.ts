import React, { useEffect, useState } from "react";
import { Servico } from "../../../Services/Servico";
import { toast } from "react-toastify";
import { useContextSite } from "../../../Context/Context";
import { IServicoDTO, IServicoForm } from "../../../Types/servico";

export const useServices = () => {
  const [filterOpen, setFilterOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
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

  function handleCreate(data: IServicoForm) {
    Servico.create(data)
      .then(() => {
        getServicos();
      })
      .catch(
        ({
          response: {
            data: { mensagem },
          },
        }) => toast.error(mensagem)
      )
      .finally(() => {
        setModalOpen(false);
      });
  }

  return {
    filterOpen,
    setFilterOpen,
    modalOpen,
    setModalOpen,
    servicos,
    handleSubmitFilter,
    handleClean,
    handleCreate,
  };
};
