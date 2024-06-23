import React, { ComponentProps } from "react";
import * as S from "./styles";
import { IUsuarioDTO } from "../../../../Types/usuario";
import { useUsersList } from "./useUsersList";

interface IUsersListProps extends ComponentProps<"div"> {
  users: IUsuarioDTO[];
}

export const UsersList = ({ users, ...rest }: IUsersListProps) => {
  const { isMobile } = useUsersList();

  return (
    <S.Table {...rest}>
      <S.TableHeader>
        <h2>Nome Completo</h2>
        <h2>CPF</h2>
        <div></div>
      </S.TableHeader>

      {isMobile ? (
        <S.TableMobileItens>
          {users?.map((i) => (
            <S.TableMobileItem key={Math.random()}>
              <div>
                <p>{i.nome}</p>
                <span>{i.cpfCnpj}</span>
              </div>
              <div>
                <img src="/assets/svg/icon-eye-open.svg" alt="icone olho" />
              </div>
            </S.TableMobileItem>
          ))}
        </S.TableMobileItens>
      ) : (
        <S.TableItens>
          {users?.map((i) => (
            <S.TableItem key={Math.random()}>
              <p>{i.nome}</p>
              <p>{i.cpfCnpj}</p>
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
