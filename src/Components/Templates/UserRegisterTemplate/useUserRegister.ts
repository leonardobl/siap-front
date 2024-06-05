import React from "react";
import { IClienteForm } from "../../../Types/cliente";
import { removerCaracteresEspeciais } from "../../../Utils/masks";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useContextSite } from "../../../Context/Context";
import { Cliente } from "../../../Services/Cliente";

export const useUserRegister = () => {
  const navigate = useNavigate();
  const { setIsLoad } = useContextSite();

  function submitForm(data: IClienteForm) {
    const PAYLOAD: IClienteForm = {
      email: data.email,
      endereco: data.endereco,
      nome: data.nome,
      senha: data.senha,
      telefone: data.telefone,
      cpf: removerCaracteresEspeciais(data.cpf),
    };

    setIsLoad(true);

    Cliente.post(PAYLOAD)
      .then(() => {
        setIsLoad(false);
        toast.success("Cadastro realizado com sucesso!");

        setTimeout(() => {
          navigate("/login");
        }, 2000);
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

  return { submitForm };
};
