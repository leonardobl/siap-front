import React, { ComponentProps } from "react";
import * as S from "./styles";
import { useServicesList } from "./useServicesList";
import { IServicoDTO } from "../../../../Types/servico";

interface IServicesListProps extends ComponentProps<"div"> {
  servicesList: IServicoDTO[];
}

export const ServicesList = ({ servicesList, ...rest }: IServicesListProps) => {
  const { isMobile } = useServicesList();

  return (
    <S.Table {...rest}>
      {servicesList?.length > 0 ? (
        <>
          <S.TableHeader>
            <h2>Serviços</h2>
          </S.TableHeader>

          <S.TableItens>
            {servicesList.map((i) => (
              <S.TableItem key={Math.random()}>
                <p>{i.nome}</p>
              </S.TableItem>
            ))}
          </S.TableItens>
        </>
      ) : (
        <p>Nenhum registro encontrado!</p>
      )}
    </S.Table>
  );
};
