import React, { ComponentProps } from "react";
import { IProfissionalDTO } from "../../../../Types/profissional";
import * as S from "./styles";
import { useProfessionalsList } from "./useProfessionalsList";

interface IProfessionalsListProps extends ComponentProps<"div"> {
  professionals: IProfissionalDTO[];
}

export const ProfessionalsList = ({
  professionals,
  ...rest
}: IProfessionalsListProps) => {
  const { isMobile, navigate } = useProfessionalsList();

  return (
    <S.Table {...rest}>
      <S.TableHeader>
        <h2>Nome</h2>
        <h2>Conselho</h2>
        <h2>N° do Conselho</h2>
        <h2>UF do Conselho</h2>
      </S.TableHeader>

      {isMobile ? (
        <S.TableMobileItens>
          {professionals?.map((i) => (
            <S.TableMobileItem key={Math.random()}>
              <div>
                <p>{i.nome}</p>
                <span>{i.conselho}</span>
              </div>
              <div className="wrapperEye">
                <img
                  src="/assets/svg/icon-eye-open.svg"
                  alt="icone olho"
                  onClick={() =>
                    navigate("/profissionais/cadastro/detalhe?id=${")
                  }
                />
              </div>
            </S.TableMobileItem>
          ))}
        </S.TableMobileItens>
      ) : (
        <S.TableItens>
          {professionals?.map((i) => (
            <S.TableItem key={Math.random()}>
              <p>{i.nome}</p>
              <p>{i.conselho}</p>
              <p>{i.numeroConselho}</p>
              <p>{i.ufConselho}</p>
              <div>
                <img
                  src="/assets/svg/icon-eye-open.svg"
                  alt="icone olho"
                  onClick={() =>
                    navigate(`/profissionais/cadastro/detalhe?id=${i.uuid}`)
                  }
                />
              </div>
            </S.TableItem>
          ))}
        </S.TableItens>
      )}
    </S.Table>
  );
};
