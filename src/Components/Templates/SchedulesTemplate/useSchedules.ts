import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { IPagination } from "../../../Types/pagination";
import { useLocation } from "react-router-dom";
import { IAgendamentoDTO, IAgendamentoProps } from "../../../Types/agendamento";
import { Agendamento } from "../../../Services/Agendamento";
import { useContextSite } from "../../../Context/Context";
import { toast } from "react-toastify";

const Title = {
  "/meus-agendamentos": "Meus Agendamentos",
  "/agendamentos": "Agendamentos",
};

export const useSchedules = () => {
  const [filterOpen, setFilterOpen] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: "640px" });
  const [pagination, setpagination] = useState<IPagination>({} as IPagination);
  const [numberPage, setNumberPage] = useState(0);
  const { pathname } = useLocation();
  const { setIsLoad } = useContextSite();
  const [agendamentos, setAgendamentos] = useState<IAgendamentoDTO[]>(
    [] as IAgendamentoDTO[]
  );

  function handleFilter(data: IAgendamentoProps) {
    getAgendamentos(data);
  }

  function getAgendamentos(props?: IAgendamentoProps) {
    setIsLoad(true);
    Agendamento.get({ size: 5, ...props })
      .then(({ data }) => {
        setAgendamentos(data.content);
        setpagination({
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
      .finally(() => setIsLoad(false));
  }

  useEffect(() => {
    getAgendamentos({ page: numberPage });
  }, [numberPage]);

  function handleClean() {
    getAgendamentos({ page: 0 });
    setNumberPage(0);
  }

  return {
    filterOpen,
    setFilterOpen,
    handleFilter,
    isMobile,
    handleClean,
    pagination,
    setNumberPage,
    pathname,
    Title,
    agendamentos,
  };
};
