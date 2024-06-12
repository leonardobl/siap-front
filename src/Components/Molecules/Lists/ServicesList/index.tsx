import React, { ComponentProps } from "react";
import * as S from "./styles";
import { useServicesList } from "./useServicesList";

interface IServicesListProps extends ComponentProps<"div"> {
  servicesList: string[];
}

export const ServicesList = ({ servicesList, ...rest }: IServicesListProps) => {
  const { isMobile } = useServicesList();

  return (
    <S.Table {...rest}>
      <S.TableHeader>
        <h2>Serviços</h2>
      </S.TableHeader>

      <S.TableItens>
        {servicesList.map((i) => (
          <S.TableItem key={Math.random()}>
            <p>{i}</p>
          </S.TableItem>
        ))}
      </S.TableItens>
    </S.Table>
  );
};
