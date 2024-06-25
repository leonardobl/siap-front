import React, { ComponentProps } from "react";
import { IPrestadorDTO } from "../../../../Types/prestador";
import * as S from "./styles";
import { useProvidersList } from "./useProvidersList";
import { maskCnpj } from "../../../../Utils/masks";

interface IProvidersListProps extends ComponentProps<"div"> {
  prestadores: IPrestadorDTO[];
}

export const ProvidersList = ({
  prestadores,
  ...rest
}: IProvidersListProps) => {
  const { isMobile } = useProvidersList();

  return (
    <S.Table {...rest}>
      <S.TableHeader>
        <h2>Nome</h2>
        <h2>CNPJ</h2>
        <h2>Cidade</h2>
        <h2>Tipo</h2>
        <h2>Status</h2>
        <div></div>
      </S.TableHeader>

      {isMobile ? (
        <S.TableItensMobile>
          {prestadores.map((i) => (
            <S.TableItemMobile key={`${i.uuid}`}>
              <div>
                <p>{i.nome}</p>
                <S.Status
                  data-suspenso={i.status === "SUSPENSO"}
                  data-ativo={i.status === "ATIVO"}
                >
                  {i.status}
                </S.Status>
              </div>
              <img src="/assets/svg/icon-eye-open.svg" alt="icone olho" />
            </S.TableItemMobile>
          ))}
        </S.TableItensMobile>
      ) : (
        <S.TableItens>
          {prestadores.map((i) => (
            <S.TableItem key={`${i.uuid}`}>
              <p>{i.nome}</p>
              <p>{maskCnpj(i.cnpj)}</p>
              <p>{`${i.endereco.cidade.nome}/${i.endereco.cidade.uf}`}</p>
              <p>{i.tipo.nome}</p>
              <S.Status
                data-suspenso={i.status === "SUSPENSO"}
                data-ativo={i.status === "ATIVO"}
              >
                {i.status}
              </S.Status>
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
