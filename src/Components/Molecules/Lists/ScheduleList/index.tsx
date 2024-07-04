import React, { ComponentProps } from "react";
import * as S from "./styles";
import { useSheduleList } from "./useSheduleList";
import { IAgendamentoDTO } from "../../../../Types/agendamento";
import { removeUnderscoreAndCapitalize } from "../../../../Utils/removeUnderscoreAndCapitalize";
import { maskCpf } from "../../../../Utils/masks";

interface IScheduleListProps extends ComponentProps<"div"> {
  Schedules: IAgendamentoDTO[];
}

const headers = [
  "Nome Completo",
  "CPF",
  "Profissional",
  "Conselho",
  "Data de Atendimento",
  "Status",
];

export const ScheduleList = ({ Schedules, ...rest }: IScheduleListProps) => {
  const { StatusColors, isMobile, handleDetail } = useSheduleList();

  return (
    <S.Container {...rest}>
      {Schedules?.length > 0 ? (
        <S.Table>
          <S.Tableheader>
            {headers.map((i) => (
              <h3 key={i}>{i}</h3>
            ))}
          </S.Tableheader>

          {isMobile ? (
            <S.TableItems>
              {Schedules?.length > 0 &&
                Schedules?.map((i) => (
                  <S.TableMobileItem key={Math.random()}>
                    <S.WrapperContentMobile>
                      <p>{i?.cliente?.nome}</p>

                      <div>
                        <span>{i["Data de Atendimento"]}</span>
                        <S.StatusAgendamento
                          statuscolor={StatusColors[i.status]}
                        >
                          {removeUnderscoreAndCapitalize(i.status)}
                        </S.StatusAgendamento>
                      </div>
                    </S.WrapperContentMobile>
                    <img
                      src="/assets/svg/icon-eye-open.svg"
                      alt="icone olho"
                      onClick={() => handleDetail(i?.uuid)}
                    />
                  </S.TableMobileItem>
                ))}
            </S.TableItems>
          ) : (
            <S.TableItems>
              {Schedules?.length > 0 &&
                Schedules?.map((i) => (
                  <S.TableItem key={Math.random()}>
                    <p>{i?.cliente?.nome}</p>
                    <p>{maskCpf(i.cliente?.cpf)}</p>
                    <p>{i?.profissional?.nome}</p>
                    <p>{i.profissional?.conselho}</p>
                    <p>{i?.diaAgendado}</p>
                    <S.StatusAgendamento statuscolor={StatusColors[i.status]}>
                      {removeUnderscoreAndCapitalize(
                        i.status.toLocaleLowerCase()
                      )}
                    </S.StatusAgendamento>
                    <img
                      src="/assets/svg/icon-eye-open.svg"
                      alt="icone olho"
                      onClick={() => handleDetail(i?.uuid)}
                    />
                  </S.TableItem>
                ))}
            </S.TableItems>
          )}
        </S.Table>
      ) : (
        <p>Nenhum registro encontrado</p>
      )}
    </S.Container>
  );
};
