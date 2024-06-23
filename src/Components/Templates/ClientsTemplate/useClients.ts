import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { useNavigate } from "react-router-dom";
import { Cliente } from "../../../Services/Cliente";
import { IClienteDTO, IClienteListPros } from "../../../Types/cliente";
import { toast } from "react-toastify";
import { useContextSite } from "../../../Context/Context";
import { IPagination } from "../../../Types/pagination";

export const useClients = () => {
  const [filterOpen, setFilterOpen] = useState(false);
  const navigate = useNavigate();
  const isMobile = useMediaQuery({ maxWidth: "640px" });
  const [clientes, setClientes] = useState<IClienteDTO[]>([] as IClienteDTO[]);
  const { setIsLoad } = useContextSite();
  const [pagination, setPagination] = useState<IPagination>({} as IPagination);
  const [numberPage, setNumberpage] = useState(0);

  function getClientes(data?: IClienteListPros) {
    setIsLoad(true);

    Cliente.list({ size: 7, page: numberPage, ...data })
      .then(({ data }) => {
        setClientes(data.content);
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

  function handleFilter(data?: IClienteListPros) {
    const hasFilter = Object.values(data).some((i) => i);

    if (hasFilter) {
      getClientes(data);
    }
  }

  function handleClean() {
    getClientes({ page: 0 });
  }

  useEffect(() => {
    getClientes({ page: numberPage });
  }, [numberPage]);

  return {
    filterOpen,
    setFilterOpen,
    navigate,
    isMobile,
    clientes,
    pagination,
    setNumberpage,
    handleFilter,
    handleClean,
  };
};
