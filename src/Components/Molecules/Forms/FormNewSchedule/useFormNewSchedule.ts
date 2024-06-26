import React, { useCallback, useEffect, useState } from "react";
import { ISelectOptions } from "../../../../Types/inputs";
import { Prestador } from "../../../../Services/Prestador";
import { Servico } from "../../../../Services/Servico";
import { useNavigate } from "react-router-dom";

export const useFormNewSchedule = () => {
  const [servicosOptions, setServicosOptions] = useState<ISelectOptions[]>(
    [] as ISelectOptions[]
  );
  const navigate = useNavigate();

  const getPrestadores = async (text: string): Promise<ISelectOptions[]> => {
    return Prestador.list({ nome: text }).then(({ data }) =>
      data.content.map((i) => ({
        value: i.uuid,
        label: `${i.nome} - ${i.cnpj}`,
      }))
    );
  };

  const getServicos = useCallback(() => {
    Servico.list().then(({ data }) => {
      const options = data.content.map((i) => ({
        value: i.uuid,
        label: i.nome,
      }));
      setServicosOptions(options);
    });
  }, []);

  useEffect(() => {
    getServicos();
  }, []);

  return { getPrestadores, servicosOptions, navigate };
};
