import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { useNavigate } from "react-router-dom";
import { IContratoDTO, IContratoListProps } from "../../../Types/contrato";
import { Contrato } from "../../../Services/Contrato";
import { IPagination } from "../../../Types/pagination";

export const useContracts = () => {
  const [filterOpen, setFilterOpen] = useState(false);
  const navigate = useNavigate();
  const isMobile = useMediaQuery({ maxWidth: "640px" });
  const [numberPage, setNumberPage] = useState(0);
  const [contratos, setContratos] = useState<IContratoDTO[]>(
    [] as IContratoDTO[]
  );
  const [pagination, setPagination] = useState<IPagination>({} as IPagination);

  function getContratos(data?: IContratoListProps) {
    Contrato.list({ ...data, size: 3, page: numberPage }).then(({ data }) => {
      setContratos(data.content);
    });
  }

  useEffect(() => {
    getContratos();
  }, [numberPage]);

  return {
    filterOpen,
    setFilterOpen,
    navigate,
    isMobile,
    contratos,
    setNumberPage,
    pagination,
  };
};
