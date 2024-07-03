import { IClienteDTO } from "./cliente";
import { IServicoContratadoDTO } from "./contrato";
import { IFaturaDTO } from "./fatura";
import { IPageRequest, IPageableObject, ISortObject } from "./page";
import { IPrestadorDTO } from "./prestador";
import { IProfissionalDTO } from "./profissional";
import { IServicoDTO } from "./servico";

export interface IAgendamentoProps extends IPageRequest {
  status?: string;
  dataInicial?: string;
  dataFinal?: string;
  idCliente?: string;
  clienteNomeCpf?: string;
  idPrestador?: string;
  prestadorNomeCnpj?: string;
  idProfissional?: string;
  profissionalNomeCpf?: string;
}

export interface IPageAgendamentoDTO {
  content: IAgendamentoDTO[];
  empty: boolean;
  first: boolean;
  last: boolean;
  number: number;
  numberOfElements: number;
  pageable: IPageableObject;
  size: number;
  sort: ISortObject;
  totalElements: number;
  totalPages: number;
}

export interface IAgendamentoDTO {
  cliente: IClienteDTO;
  dataPagamento: string;
  dataRealizacao: string;
  diaAgendado: string;
  fatura: IFaturaDTO;
  horaAgendada: string;
  prestador: IPrestadorDTO;
  profissional: IProfissionalDTO;
  servico: IServicoDTO;
  servicoContratado: IServicoContratadoDTO;
  status: string;
  uuid: string;
}

export interface IAgendamentoCadastroForm {
  uuidCliente: string;
  uuidPrestador: string;
  uuidServico: string;
}
export interface IAgendamentoCadastroFormRHF {
  uuidCliente: string;
  uuidPrestador: string;
  uuidServico: string;
  cidade: string;
}

export interface IAgendamentoAgendarForm {
  diaAgendado: string;
  horaAgendada: string;
}

export interface IAgendamentoAgendarFormProps extends IAgendamentoAgendarForm {
  uuid: string;
}
