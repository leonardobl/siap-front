import React, { ComponentProps } from "react";
import { IContratoDTO } from "../../../../Types/contrato";
import * as S from "./styles";
import { maskCnpj } from "../../../../Utils/masks";
import { useContractsList } from "./useContractsList";
import { Status } from "../../../Atoms/Status";
import { reverseToBrDate } from "../../../../Utils/dateTransform";
import { Capitalize } from "../../../../Utils/capitalize";

interface IContractsListProps extends ComponentProps<"div"> {
  contracts: IContratoDTO[];
}

export const ContractsList = ({ contracts, ...rest }: IContractsListProps) => {
  const { isMobile, StatusColors } = useContractsList();

  return (
    <>
      {contracts?.length > 0 ? (
        <S.Table {...rest} data-cy="contracts-wrapper">
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
                    <Status textcolor={StatusColors[i?.status.toLowerCase()]}>
                      {Capitalize(i.status)}
                    </Status>
                  </div>
                  <div>
                    <img src="/assets/svg/icon-eye-open.svg" alt="icone olho" />
                  </div>
                </S.TableMobileItem>
              ))}
            </S.TableMobileItens>
          ) : (
            <S.TableItens data-cy="contracts-list">
              {contracts?.map((i) => (
                <S.TableItem key={Math.random()}>
                  <p>{i?.prestador?.nome}</p>
                  <p>{maskCnpj(i?.prestador?.cnpj)}</p>
                  <p>{reverseToBrDate(i?.dataFinal)}</p>
                  <Status textcolor={StatusColors[Capitalize(i.status)]}>
                    {Capitalize(i.status)}
                  </Status>
                  <div>
                    <img src="/assets/svg/icon-eye-open.svg" alt="icone olho" />
                  </div>
                </S.TableItem>
              ))}
            </S.TableItens>
          )}
        </S.Table>
      ) : (
        <p>Nenhum registro encontrado</p>
      )}
    </>
  );
};
