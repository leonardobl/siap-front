import React, { ComponentProps } from "react";
import * as S from "./styles";
import { IServicoContratadoFormRHF } from "../../../../Types/contrato";
import { maskMoney } from "../../../../Utils/masks";

interface IServicesContractListProps extends ComponentProps<"div"> {
  services: IServicoContratadoFormRHF[];
  onDeleteItem: (id: string) => void;
}

export const ServicesContractList = ({
  services,
  onDeleteItem,
  ...rest
}: IServicesContractListProps) => {
  return (
    <S.Table {...rest}>
      <S.TableHeader>
        <h2>Serviços</h2>
        <h2>Valor</h2>
      </S.TableHeader>

      <S.TableItens>
        {services?.map((i) => (
          <S.TableItem key={Math.random()}>
            <p>{i.value}</p>
            <p>{maskMoney(i.valor)}</p>
            <div>
              <img
                src="/assets/svg/icon-trash-red.svg"
                alt="icone lixeira"
                onClick={() => onDeleteItem(i.value)}
              />
            </div>
          </S.TableItem>
        ))}
      </S.TableItens>
    </S.Table>
  );
};
