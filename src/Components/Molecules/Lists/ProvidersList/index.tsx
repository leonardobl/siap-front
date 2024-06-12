import React, { ComponentProps } from "react";
import { IPrestadorDTO } from "../../../../Types/prestador";
import * as S from "./styles";
import { useProvidersList } from "./useProvidersList";
import { StatusEnum } from "../../../../Enum/status";

interface IProvidersListProps extends ComponentProps<"div"> {
  prestadores: IPrestadorDTO[];
}

export const ProvidersList = ({
  prestadores,
  ...rest
}: IProvidersListProps) => {
  const { isMobile } = useProvidersList();

  return (
    <S.Table>
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
          <S.TableItemMobile>
            <div>
              <p>Camilla Santos de Alcântara</p>
              <S.Status data-suspenso>Suspenso</S.Status>
            </div>
            <img src="/assets/svg/icon-eye-open.svg" alt="icone olho" />
          </S.TableItemMobile>

          <S.TableItemMobile>
            <div>
              <p>Camilla Santos de Alcântara</p>
              <S.Status data-ativo>Ativo</S.Status>
            </div>
            <img src="/assets/svg/icon-eye-open.svg" alt="icone olho" />
          </S.TableItemMobile>

          <S.TableItemMobile>
            <div>
              <p>Camilla Santos de Alcântara</p>
              <S.Status data-ativo>Ativo</S.Status>
            </div>
            <img src="/assets/svg/icon-eye-open.svg" alt="icone olho" />
          </S.TableItemMobile>
        </S.TableItensMobile>
      ) : (
        <S.TableItens>
          <S.TableItem>
            <p>Camilla Santos de Alcântara</p>
            <p>0.394.460/0058-87</p>
            <p>São Luís/MA</p>
            <p>Clínica</p>
            <S.Status data-suspenso>Suspenso</S.Status>
            <div>
              <img src="/assets/svg/icon-eye-open.svg" alt="icone olho" />
            </div>
          </S.TableItem>

          <S.TableItem>
            <p>Camilla Santos de Alcântara</p>
            <p>0.394.460/0058-87</p>
            <p>São Luís/MA</p>
            <p>Clínica</p>
            <S.Status data-ativo>Ativo</S.Status>
            <div>
              <img src="/assets/svg/icon-eye-open.svg" alt="icone olho" />
            </div>
          </S.TableItem>

          <S.TableItem>
            <p>Camilla Santos de Alcântara</p>
            <p>0.394.460/0058-87</p>
            <p>São Luís/MA</p>
            <p>Clínica</p>
            <S.Status data-suspenso>Suspenso</S.Status>
            <div>
              <img src="/assets/svg/icon-eye-open.svg" alt="icone olho" />
            </div>
          </S.TableItem>
        </S.TableItens>
      )}
    </S.Table>
  );
};
