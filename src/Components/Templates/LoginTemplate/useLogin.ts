import React, { useEffect } from "react";

import { toast } from "react-toastify";
import { Autenticacao } from "../../../Services/Autenticacao";
import { removeDigitos } from "../../../Utils/masks";
import { IAutenticacaoForm, IDecodedToken } from "../../../Types/autenticacao";
import { useContextSite } from "../../../Context/Context";
import { useLocalStorage } from "../../../Hooks/useSessionStorage";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";

export const useLogin = () => {
  const { setIsLoad } = useContextSite();
  const [token, setToken] = useLocalStorage("@token");
  const [usuarioStorage, setUsuarioStorage] = useLocalStorage("usuario");
  const navigate = useNavigate();

  function submiteForm(data: IAutenticacaoForm) {
    setIsLoad(true);

    const PAYLOAD: IAutenticacaoForm = {
      cpfCNPJ: removeDigitos(data.cpfCNPJ),
      senha: data.senha,
    };

    Autenticacao.post(PAYLOAD)
      .then(({ data }) => {
        setToken(data.token);
        return data.token;
      })
      .then((token) => {
        const decoded = jwtDecode<IDecodedToken>(token);

        setUsuarioStorage({
          uuidUsuario: decoded.uuid,
          usuarioCpfCnpj: decoded.sub,
          roles: decoded.perfis,
        });

        toast.success("Login efetuado com sucesso");
        setTimeout(() => {
          navigate("/usuarios");
        }, 2000);
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

  useEffect(() => {
    if (token) {
      navigate(-1);
    }
  }, []);

  return { submiteForm };
};
