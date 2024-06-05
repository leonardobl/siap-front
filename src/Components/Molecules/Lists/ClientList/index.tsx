import React, { ComponentProps } from "react";
import * as S from "./styles";

interface IClientListProps extends ComponentProps<"div"> {
  clients: { nome: string; cpf: string }[];
}

export const ClientList = ({ clients, ...rest }: IClientListProps) => {
  return (
    <S.Table {...rest}>
      <S.TableHeader>
        <h2>Nome Completo</h2>
        <h2>CPF</h2>
        <span></span>
      </S.TableHeader>
      <S.TableItems>
        {clients?.length > 0 &&
          clients.map((i) => (
            <S.TableItem key={Math.random()}>
              <p>{i?.nome || "---"}</p>
              <p>{i.cpf || "---"}</p>
              <div className="wrapper-eye">
                <img src="/assets/svg/icon-eye-open.svg" alt="icone olho" />
              </div>
            </S.TableItem>
          ))}
      </S.TableItems>
    </S.Table>
  );
};
