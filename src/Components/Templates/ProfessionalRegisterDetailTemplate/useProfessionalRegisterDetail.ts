import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Profissional } from "../../../Services/Profissional";
import { useContextSite } from "../../../Context/Context";
import { IProfissionalDTO } from "../../../Types/profissional";
import { toast } from "react-toastify";

export const useProfessionalRegisterDetail = () => {
  const [searchParam] = useSearchParams();
  const id = searchParam.get("id");
  const { setIsLoad } = useContextSite();
  const [professional, setProfessional] = useState<IProfissionalDTO>(
    {} as IProfissionalDTO
  );
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      setIsLoad(true);
      Profissional.getById(id)
        .then(({ data }) => {
          setProfessional(data);
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
  }, [id]);

  return { professional, navigate };
};
