import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { useNavigate } from "react-router-dom";
import {
  IDadosFinanceirosForm,
  IPrestadorDTO,
  IPrestadorForm,
  IVinculoPrestadorFinanceiro,
} from "../../../Types/prestador";
import { Prestador } from "../../../Services/Prestador";
import { toast } from "react-toastify";
import { useContextSite } from "../../../Context/Context";
import {
  IProfissionalForm,
  IProfissionalListProps,
} from "../../../Types/profissional";
import { Profissional } from "../../../Services/Profissional";
import { IPagination } from "../../../Types/pagination";

export const useProviderRegister = () => {
  const [tabIdx, setTabIdx] = useState(3);
  const [filterOpen, setFilterOpen] = useState(false);
  const navigate = useNavigate();
  const isMobile = useMediaQuery({ maxWidth: "640px" });
  const [modalOpen, setModalOpen] = useState(false);
  const { setIsLoad } = useContextSite();
  const [prestador, setPrestador] = useState<IPrestadorDTO>(
    {} as IPrestadorDTO
  );
  const [profissionais, setProfissionais] = useState([]);
  const [numberPage, setNumberPage] = useState(0);
  const [pagination, setPagination] = useState<IPagination>({} as IPagination);

  function handleSubmitProvider(data: IPrestadorForm) {
    setIsLoad(true);

    const PAYLOAD: IPrestadorForm = {
      ...data,
      endereco: {
        ...data.endereco,
        cidade: {
          ...data.endereco.cidade,
          uf: data.endereco.uf,
        },
      },
    };

    Prestador.create(PAYLOAD)
      .then(({ data }) => {
        setTabIdx(2);
        setPrestador(data);
      })
      .catch(
        ({
          response: {
            data: { mensagem },
          },
        }) => {
          toast.error(mensagem);
        }
      )
      .finally(() => {
        setIsLoad(false);
      });
  }

  function handleSubmitFinance(data: IDadosFinanceirosForm) {
    setIsLoad(true);

    const PAYLOAD: IVinculoPrestadorFinanceiro = {
      uuid: prestador.uuid,
      ...data,
    };

    Prestador.vincular_dados_financeiros(PAYLOAD)
      .then(({ data }) => {
        setTabIdx(3);
        setPrestador(data);
      })
      .catch(
        ({
          response: {
            data: { mensagem },
          },
        }) => {
          toast.error(mensagem);
        }
      )
      .finally(() => {
        setIsLoad(false);
      });
  }

  function handleSubmitProfessional(data: IProfissionalForm) {
    setIsLoad(true);
    setModalOpen(false);

    const PAYLOAD: IProfissionalForm = {
      ...data,
      uuidPrestador: prestador.uuid,
    };
    Profissional.create(PAYLOAD)
      .then(({ data }) => {
        getProfissionais({ uuidPrestador: prestador.uuid, page: 0 });
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

  useEffect(() => {
    if (tabIdx === 3) {
      getProfissionais({ page: numberPage, uuidPrestador: prestador.uuid });
    }
  }, [numberPage, tabIdx]);

  function handleFilterProfessional(data: IProfissionalListProps) {
    const hasFilter = Object.values(data).some((i) => i);

    if (hasFilter) {
      getProfissionais({ page: 0, ...data, uuidPrestador: prestador.uuid });
    }
  }

  function handleClean() {
    getProfissionais({ page: 0, uuidPrestador: prestador.uuid });
    setNumberPage(0);
  }

  function handleSave() {
    setIsLoad(true);

    setTimeout(() => {
      navigate("/prestadores");
      setIsLoad(false);
    }, 2000);
  }

  return {
    tabIdx,
    filterOpen,
    setFilterOpen,
    navigate,
    isMobile,
    modalOpen,
    setModalOpen,
    handleSubmitProvider,
    handleSubmitFinance,
    handleSubmitProfessional,
    profissionais,
    setNumberPage,
    pagination,
    handleFilterProfessional,
    handleClean,
    handleSave,
  };
};
