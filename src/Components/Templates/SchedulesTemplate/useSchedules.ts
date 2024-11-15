import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { IPagination } from "../../../Types/pagination";
import { useLocation } from "react-router-dom";
import { IAgendamentoDTO, IAgendamentoProps } from "../../../Types/agendamento";
import { Agendamento } from "../../../Services/Agendamento";
import { useContextSite } from "../../../Context/Context";
import { toast } from "react-toastify";
import { useLocalStorage } from "../../../Hooks/useSessionStorage";

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
  const [usuarioLogado] = useLocalStorage("dataUser");

  function handleFilter(data: IAgendamentoProps) {
    getAgendamentos(data);
  }

  async function getAgendamentos(props?: IAgendamentoProps) {
    setIsLoad(true);
    let params = props;

    if (pathname.includes("/meus-agendamentos")) {
      params = { ...props, idCliente: usuarioLogado?.cliente?.uuid };
    }

    Agendamento.get({ size: 5, ...params })
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
