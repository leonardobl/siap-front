import React, { ComponentProps } from "react";
import { ITipoPrestadorDTO } from "../../../../Types/tipoPrestador";
import * as S from "./styles";

interface IProviderTypeListProps extends ComponentProps<"div"> {
  providersTypes: ITipoPrestadorDTO[];
}

export const ProviderTypeList = ({
  providersTypes,
  ...rest
}: IProviderTypeListProps) => {
  return (
    <>
      {providersTypes?.length > 0 ? (
        <S.Table {...rest} data-cy="providers-types-wrapper">
          <S.TableHeader>
            <h2>Tipo de Prestador</h2>
          </S.TableHeader>

          <S.TableItens data-cy="providers-types-list">
            {providersTypes?.map((i) => (
              <S.TableItem key={Math.random()}>
                <p>{i?.nome}</p>
              </S.TableItem>
            ))}
          </S.TableItens>
        </S.Table>
      ) : (
        <p>Nenhum registro encontrado</p>
      )}
    </>
  );
};
