import React, { ComponentProps } from "react";
import * as S from "./styles";
import { IClienteDTO } from "../../../../Types/cliente";
import { useClientList } from "./useClientList";
import { maskCpf } from "../../../../Utils/masks";

interface IClientListProps extends ComponentProps<"div"> {
  clients: IClienteDTO[];
}

export const ClientList = ({ clients, ...rest }: IClientListProps) => {
  const { navigate } = useClientList();

  return (
    <>
      {clients?.length > 0 ? (
        <S.Table {...rest} data-cy="clients-wrapper">
          <S.TableHeader>
            <h2>Nome Completo</h2>
            <h2>CPF</h2>
            <span></span>
          </S.TableHeader>
          <S.TableItems data-cy="clients-list">
            {clients?.length > 0 &&
              clients.map((i) => (
                <S.TableItem key={Math.random()}>
                  <p>{i?.nome || "---"}</p>
                  <p>{maskCpf(i.cpf) || "---"}</p>
                  <div className="wrapper-eye">
                    <img
                      src="/assets/svg/icon-eye-open.svg"
                      alt="icone olho"
                      onClick={() => navigate(`/clientes/cliente?id=${i.uuid}`)}
                    />
                  </div>
                </S.TableItem>
              ))}
          </S.TableItems>
        </S.Table>
      ) : (
        <p>Nenhum registro encontrado</p>
      )}
    </>
  );
};
