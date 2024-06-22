import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { useNavigate } from "react-router-dom";
import { Cliente } from "../../../Services/Cliente";
import { IClienteDTO, IClienteListPros } from "../../../Types/cliente";
import { toast } from "react-toastify";
import { useContextSite } from "../../../Context/Context";

export const useClients = () => {
  const [filterOpen, setFilterOpen] = useState(false);
  const navigate = useNavigate();
  const isMobile = useMediaQuery({ maxWidth: "640px" });
  const [clientes, setClientes] = useState<IClienteDTO[]>([] as IClienteDTO[]);
  const { setIsLoad } = useContextSite();

  function getClientes(data?: IClienteListPros) {
    setIsLoad(true);

    Cliente.list(data)
      .then(({ data }) => {
        setClientes(data.content);
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
    getClientes();
  }, []);

  return { filterOpen, setFilterOpen, navigate, isMobile, clientes };
};
