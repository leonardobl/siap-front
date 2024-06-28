import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { useNavigate } from "react-router-dom";
import { IPagination } from "../../../Types/pagination";
import { IProfissionalListProps } from "../../../Types/profissional";
import { Profissional } from "../../../Services/Profissional";
import { toast } from "react-toastify";
import { useContextSite } from "../../../Context/Context";

export const useProfessionals = () => {
  const { setIsLoad } = useContextSite();
  const [filterOpen, setFilterOpen] = useState(false);
  const navigate = useNavigate();
  const isMobile = useMediaQuery({ maxWidth: "640px" });
  const [profissionais, setProfissionais] = useState([]);
  const [numberPage, setNumberPage] = useState(0);
  const [pagination, setPagination] = useState<IPagination>({} as IPagination);

  function getProfissionais(props: IProfissionalListProps) {
    setIsLoad(true);
    Profissional.list({
      page: 0,
      size: 5,
      ...props,
    })
      .then(({ data }) => {
        setProfissionais(data.content);
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

  function handleFilterProfessional(data: IProfissionalListProps) {
    const hasFilter = Object.values(data).some((i) => i);

    if (hasFilter) {
      getProfissionais({ page: 0, ...data });
    }
  }

  function handleClean() {
    getProfissionais({ page: 0 });
    setNumberPage(0);
  }

  useEffect(() => {
    getProfissionais({ page: numberPage });
  }, [numberPage]);

  return {
    filterOpen,
    setFilterOpen,
    navigate,
    isMobile,
    profissionais,
    setNumberPage,
    pagination,
    handleClean,
    handleFilterProfessional,
  };
};
