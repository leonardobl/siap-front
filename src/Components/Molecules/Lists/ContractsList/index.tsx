import React, { ComponentProps } from "react";
import { IContratoCompletoDTO } from "../../../../Types/contrato";
import * as S from "./styles";
import { maskCnpj } from "../../../../Utils/masks";
import { useContractsList } from "./useContractsList";
import { Status } from "../../../Atoms/Status";

interface IContractsListProps extends ComponentProps<"div"> {
  contracts: IContratoCompletoDTO[];
}

export const ContractsList = ({ contracts, ...rest }: IContractsListProps) => {
  const { isMobile, StatusColors } = useContractsList();

  return (
    <S.Table {...rest}>
      <S.TableHeader>
        <h2>Prestador</h2>
        <h2>CNPJ</h2>
        <h2>Vencimento</h2>
        <h2>Status</h2>
        <div></div>
      </S.TableHeader>

      {isMobile ? (
        <S.TableMobileItens>
          {contracts?.map((i) => (
            <S.TableMobileItem key={Math.random()}>
              <div className="WrapperContent">
                <p>{i?.prestador?.nome}</p>
                <Status textcolor={StatusColors[i?.status]}>{i.status}</Status>
              </div>
              <div>
                <img src="/assets/svg/icon-eye-open.svg" alt="icone olho" />
              </div>
            </S.TableMobileItem>
          ))}
        </S.TableMobileItens>
      ) : (
        <S.TableItens>
          {contracts?.map((i) => (
            <S.TableItem key={Math.random()}>
              <p>{i?.prestador?.nome}</p>
              <p>{maskCnpj(i?.prestador?.cnpj)}</p>
              <p>{i?.dataFinal}</p>
              <Status textcolor={StatusColors[i?.status]}>{i.status}</Status>
              <div>
                <img src="/assets/svg/icon-eye-open.svg" alt="icone olho" />
              </div>
            </S.TableItem>
          ))}
        </S.TableItens>
      )}
    </S.Table>
  );
};
