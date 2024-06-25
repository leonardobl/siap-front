import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { useNavigate } from "react-router-dom";
import { IPageRequest } from "../../../Types/page";
import { Prestador } from "../../../Services/Prestador";
import { useContextSite } from "../../../Context/Context";
import { toast } from "react-toastify";
import { IPrestadorDTO } from "../../../Types/prestador";
import { IPagination } from "../../../Types/pagination";

export const useProviders = () => {
  const [filterOpen, setFilterOpen] = useState(false);
  const navigate = useNavigate();
  const isMobile = useMediaQuery({ maxWidth: "640px" });
  const [prestadores, setPrestadores] = useState<IPrestadorDTO[]>(
    [] as IPrestadorDTO[]
  );
  const { setIsLoad } = useContextSite();
  const [numberPage, setNumberPage] = useState(0);
  const [pagination, setPagination] = useState<IPagination>({} as IPagination);

  function getPrestadores(data?: IPageRequest) {
    setIsLoad(true);

    Prestador.list({ size: 5, ...data })
      .then(({ data }) => {
        setPrestadores(data.content);
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
    getPrestadores({ page: numberPage });
  }, [numberPage]);

  return {
    filterOpen,
    setFilterOpen,
    navigate,
    isMobile,
    prestadores,
    setNumberPage,
    pagination,
  };
};
