import React, { ComponentProps, useEffect } from "react";
import { ITipoPrestadorDTO } from "../../../../Types/tipoPrestador";
import * as S from "./styles";
import { useProviderTypeList } from "./useProviderTypeList";

interface IProviderTypeListProps extends ComponentProps<"div"> {
  providersTypes: ITipoPrestadorDTO[];
}

export const ProviderTypeList = ({
  providersTypes,
  ...rest
}: IProviderTypeListProps) => {
  const { isMobile } = useProviderTypeList();

  useEffect(() => {
    console.log(providersTypes);
  }, [providersTypes]);
  return (
    <S.Table {...rest}>
      <S.TableHeader>
        <h2>Tipo de Prestador</h2>
      </S.TableHeader>

      <S.TableItens>
        {providersTypes?.map((i) => (
          <S.TableItem key={Math.random()}>
            <p>{i?.nome}</p>
          </S.TableItem>
        ))}
      </S.TableItens>
    </S.Table>
  );
};
