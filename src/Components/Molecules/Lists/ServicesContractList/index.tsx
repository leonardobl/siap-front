import React, { ComponentProps } from "react";
import * as S from "./styles";

type servicesValues = {
  nome: string;
  valor: string;
};

interface IServicesContractListProps extends ComponentProps<"div"> {
  services: servicesValues[];
}

export const ServicesContractList = ({
  services,
  ...rest
}: IServicesContractListProps) => {
  return (
    <S.Table {...rest}>
      <S.TableHeader>
        <h2>Serviços</h2>
        <h2>Valor</h2>
      </S.TableHeader>

      <S.TableItens>
        {services.map((i) => (
          <S.TableItem key={Math.random()}>
            <p>{i.nome}</p>
            <p>{i.valor}</p>
            <div>
              <img src="/assets/svg/icon-trash-red.svg" alt="icone lixeira" />
            </div>
          </S.TableItem>
        ))}
      </S.TableItens>
    </S.Table>
  );
};
