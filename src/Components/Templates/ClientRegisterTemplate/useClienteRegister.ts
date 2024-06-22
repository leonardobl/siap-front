import React from "react";
import { IClienteForm } from "../../../Types/cliente";
import { Cliente } from "../../../Services/Cliente";
import { useContextSite } from "../../../Context/Context";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { removerCaracteresEspeciais } from "../../../Utils/masks";

export const useClienteRegister = () => {
  const { setIsLoad } = useContextSite();
  const navigate = useNavigate();

  function handleSubmit(data: IClienteForm) {
    setIsLoad(true);

    const PAYLOAD = {
      cpf: removerCaracteresEspeciais(data.cpf),
      email: data.email,
      endereco: {
        ...data.endereco,
        cidade: {
          ...data.endereco.cidade,
          uf: data.endereco.uf,
        },
      },
      nome: data.nome,
      senha: data.senha,
      telefone: data.telefone,
    };

    Cliente.post(PAYLOAD)
      .then(() => {
        toast.success("Cliente cadastrado com sucesso!");

        setTimeout(() => {
          navigate("/clientes");
        }, 2000);
      })
      .finally(() => {
        setIsLoad(false);
      });
  }

  return { handleSubmit };
};
