import React, { useEffect, useState } from "react";
import { Servico } from "../../../Services/Servico";
import { toast } from "react-toastify";
import { useContextSite } from "../../../Context/Context";
import {
  IServicoDTO,
  IServicoForm,
  IServicoProps,
} from "../../../Types/servico";
import { useMediaQuery } from "react-responsive";
import { IPagination } from "../../../Types/pagination";

export const useServices = () => {
  const [filterOpen, setFilterOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const { setIsLoad } = useContextSite();
  const isMobile = useMediaQuery({ maxWidth: "640px" });
  const [servicos, setServicos] = useState<IServicoDTO[]>([] as IServicoDTO[]);
  const [pagination, setPagination] = useState<IPagination>({} as IPagination);
  const [numberPage, setNumberPage] = useState(0);

  function getServicos(data?: IServicoProps) {
    setIsLoad(true);
    Servico.list({ ...data, size: 7 })
      .then(({ data }) => {
        setServicos(data.content);
        setPagination({
          actualPage: data.number,
          totalPage: data.totalPages,
          totalRegister: data.totalElements,
        });
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
    getServicos({ page: numberPage });
  }, [numberPage]);

  function handleSubmitFilter(data: IServicoForm) {
    if (data?.nome) {
      getServicos(data);
    }
  }

  function handleClean() {
    setNumberPage(0);
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
    isMobile,
    pagination,
    setNumberPage,
    numberPage,
  };
};
