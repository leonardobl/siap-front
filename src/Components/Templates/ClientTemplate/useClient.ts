import React, { useCallback, useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { IClienteDTO } from "../../../Types/cliente";
import { Cliente } from "../../../Services/Cliente";
import { toast } from "react-toastify";
import { useContextSite } from "../../../Context/Context";

export const useClient = () => {
  const [searchParams] = useSearchParams();
  const uuid = searchParams.get("id");
  const [cliente, setCliente] = useState<IClienteDTO>({} as IClienteDTO);
  const { setIsLoad } = useContextSite();

  function getCliente({ uuid }: { uuid: string }) {
    setIsLoad(true);
    Cliente.byId({ uuid })
      .then(({ data }) => setCliente(data))
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
    if (uuid) {
      getCliente({ uuid });
    }
  }, [uuid]);

  return { cliente };
};
