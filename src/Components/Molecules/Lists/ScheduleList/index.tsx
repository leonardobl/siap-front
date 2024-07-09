import React, { ComponentProps } from "react";
import * as S from "./styles";
import { useSheduleList } from "./useSheduleList";
import { IAgendamentoDTO } from "../../../../Types/agendamento";
import { removeUnderscoreAndCapitalize } from "../../../../Utils/removeUnderscoreAndCapitalize";
import { maskCpf } from "../../../../Utils/masks";
import { reverseToBrDate } from "../../../../Utils/dateTransform";

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
            <div></div>
          </S.Tableheader>

          {isMobile ? (
            <S.TableItems>
              {Schedules?.length > 0 &&
                Schedules?.map((i) => (
                  <S.TableMobileItem key={Math.random()}>
                    <S.WrapperContentMobile>
                      <p>{i?.cliente?.nome}</p>

                      <div>
                        <span>{reverseToBrDate(i?.diaAgendado)}</span>
                        <S.StatusAgendamento
                          statuscolor={StatusColors[i.status]}
                        >
                          {removeUnderscoreAndCapitalize(i.status)}
                        </S.StatusAgendamento>
                      </div>
                    </S.WrapperContentMobile>

                    <S.WrapperIconEye>
                      <img
                        src="/assets/svg/icon-eye-open.svg"
                        alt="icone olho"
                        onClick={() => handleDetail(i?.uuid)}
                      />
                    </S.WrapperIconEye>
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
                    <p>{reverseToBrDate(i?.diaAgendado)}</p>
                    <S.StatusAgendamento statuscolor={StatusColors[i.status]}>
                      {removeUnderscoreAndCapitalize(i.status)}
                    </S.StatusAgendamento>
                    <S.WrapperIconEye>
                      <img
                        src="/assets/svg/icon-eye-open.svg"
                        alt="icone olho"
                        onClick={() => handleDetail(i?.uuid)}
                      />
                    </S.WrapperIconEye>
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
