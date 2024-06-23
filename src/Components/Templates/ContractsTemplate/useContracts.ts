import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { useNavigate } from "react-router-dom";
import { IContratoDTO, IContratoListProps } from "../../../Types/contrato";
import { Contrato } from "../../../Services/Contrato";
import { IPagination } from "../../../Types/pagination";
import { useContextSite } from "../../../Context/Context";
import { toast } from "react-toastify";

export const useContracts = () => {
  const [filterOpen, setFilterOpen] = useState(false);
  const navigate = useNavigate();
  const isMobile = useMediaQuery({ maxWidth: "640px" });
  const [numberPage, setNumberPage] = useState(0);
  const [contratos, setContratos] = useState<IContratoDTO[]>(
    [] as IContratoDTO[]
  );
  const [pagination, setPagination] = useState<IPagination>({} as IPagination);
  const { setIsLoad } = useContextSite();

  function getContratos(data?: IContratoListProps) {
    setIsLoad(true);
    Contrato.list({ ...data, size: 3, page: numberPage })
      .then(({ data }) => {
        setContratos(data.content);
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
    getContratos({ page: numberPage });
  }, [numberPage]);

  function handleFilter(data: IContratoListProps) {
    const hasFilter = Object.values(data).some((i) => i);

    if (hasFilter) {
      getContratos(data);
    }
  }

  function handleClean() {
    setNumberPage(0);
    getContratos();
  }

  return {
    filterOpen,
    setFilterOpen,
    navigate,
    isMobile,
    contratos,
    setNumberPage,
    pagination,
    handleFilter,
    handleClean,
  };
};
