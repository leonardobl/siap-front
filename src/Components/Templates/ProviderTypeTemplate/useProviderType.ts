import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import {
  ITipoPrestadorDTO,
  ITipoPrestadorProps,
} from "../../../Types/tipoPrestador";
import { useContextSite } from "../../../Context/Context";
import { TipoPrestador } from "../../../Services/TipoPrestador";
import { toast } from "react-toastify";
import { IPagination } from "../../../Types/pagination";

export const useProviderType = () => {
  const [filterOpen, setFilterOpen] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: "640px" });
  const [modalOpen, setModalOpen] = useState(false);
  const [tipos, setTipos] = useState<ITipoPrestadorDTO[]>(
    [] as ITipoPrestadorDTO[]
  );
  const { setIsLoad } = useContextSite();
  const [numberPage, setNumberPage] = useState(0);
  const [pagination, setPagination] = useState<IPagination>({} as IPagination);

  function getTipos(data?: ITipoPrestadorProps) {
    setIsLoad(true);

    TipoPrestador.list({ ...data, page: numberPage, size: 5 })
      .then(({ data }) => {
        setTipos(data.content);
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
    getTipos();
  }, [numberPage]);

  function handleSubmit(data: ITipoPrestadorDTO) {
    setIsLoad(true);
    setModalOpen(false);
    TipoPrestador.create(data)
      .then(({ data }) => {
        toast.success("Tipo prestador cadastrado com sucesso");
        getTipos({ page: 0 });
        setNumberPage(0);
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

  return {
    filterOpen,
    setFilterOpen,
    isMobile,
    modalOpen,
    setModalOpen,
    tipos,
    setNumberPage,
    pagination,
    handleSubmit,
  };
};
