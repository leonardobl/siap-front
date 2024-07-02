import React, { ComponentProps } from "react";
import * as S from "./styles";
import { useSheduleList } from "./useSheduleList";
import { v4 } from "uuid";

interface IScheduleListProps extends ComponentProps<"div"> {
  Schedules: [];
}

const headers = [
  "Nome Completo",
  "CPF",
  "Profissional",
  "Conselho",
  "Data de Atendimento",
  "Status",
];

const Items = [
  {
    mome: "Camilla Santos de Alcântara",
    CPF: "018.895.983.13",
    Profissional: "Estácio Neto",
    Conselho: "123456 CRN/RJ",
    "Data de Atendimento": "24/06/2024 9:00 ",
    Status: "Agendado",
  },
  {
    mome: "Camilla Santos de Alcântara",
    CPF: "018.895.983.13",
    Profissional: "Estácio Neto",
    Conselho: "123456 CRN/RJ",
    "Data de Atendimento": "24/06/2024 9:00 ",
    Status: "Pago",
  },
  {
    mome: "Camilla Santos de Alcântara",
    CPF: "018.895.983.13",
    Profissional: "Estácio Neto",
    Conselho: "123456 CRN/RJ",
    "Data de Atendimento": "24/06/2024 9:00 ",
    Status: "Finalizado",
  },
  {
    mome: "Camilla Santos de Alcântara",
    CPF: "018.895.983.13",
    Profissional: "Estácio Neto",
    Conselho: "123456 CRN/RJ",
    "Data de Atendimento": "24/06/2024 9:00 ",
    Status: "Cancelado",
  },
  {
    mome: "Camilla Santos de Alcântara",
    CPF: "018.895.983.13",
    Profissional: "Estácio Neto",
    Conselho: "123456 CRN/RJ",
    "Data de Atendimento": "24/06/2024 9:00 ",
    Status: "Aguardando Pagamento",
  },
];

export const ScheduleList = ({ Schedules, ...rest }: IScheduleListProps) => {
  const { StatusColors, isMobile, handleDetail } = useSheduleList();

  return (
    <S.Container {...rest}>
      {Items.length > 0 ? (
        <S.Table>
          <S.Tableheader>
            {headers.map((i) => (
              <h3 key={i}>{i}</h3>
            ))}
          </S.Tableheader>

          {isMobile ? (
            <S.TableItems>
              {Items.map((i) => (
                <S.TableMobileItem key={Math.random()}>
                  <S.WrapperContentMobile>
                    <p>{i.mome}</p>

                    <div>
                      <span>{i["Data de Atendimento"]}</span>
                      <S.StatusAgendamento statuscolor={StatusColors[i.Status]}>
                        {i.Status}
                      </S.StatusAgendamento>
                    </div>
                  </S.WrapperContentMobile>
                  <img
                    src="/assets/svg/icon-eye-open.svg"
                    alt="icone olho"
                    onClick={handleDetail}
                  />
                </S.TableMobileItem>
              ))}
            </S.TableItems>
          ) : (
            <S.TableItems>
              {Items.map((i) => (
                <S.TableItem key={Math.random()}>
                  <p>{i.mome}</p>
                  <p>{i.CPF}</p>
                  <p>{i.Profissional}</p>
                  <p>{i.Conselho}</p>
                  <p>{i["Data de Atendimento"]}</p>
                  <S.StatusAgendamento statuscolor={StatusColors[i.Status]}>
                    {i.Status}
                  </S.StatusAgendamento>
                  <img
                    src="/assets/svg/icon-eye-open.svg"
                    alt="icone olho"
                    onClick={handleDetail}
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
