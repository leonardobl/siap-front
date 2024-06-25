import { IPageRequest, IPageableObject, ISortObject } from "./page";
import { IPrestadorDTO } from "./prestador";
import { IServicoDTO } from "./servico";

export interface IContratoCompletoDTO {
  dataFinal: string;
  dataInicial: string;
  prestador: IPrestadorDTO;
  servicos: IServicoContratadoDTO[];
  status: string;
  uuid: string;
}

export interface IServicoContratadoDTO {
  servico: IServicoDTO;
  uuid: string;
  valor: number;
}

export interface IContratoListProps extends IPageRequest {
  nome?: string;
  cnpj?: string;
  razaoSocial?: string;
  dataInicio?: string;
  dataFim?: string;
  servico?: string;
}

export interface IContratoForm {
  dataFinal: string;
  dataInicial: string;
  uuidPrestador: string;
}

export interface IServicoContratadoForm {
  uuidServico: string;
  valor: number;
}

export interface IContratoCompletoForm extends IContratoForm {
  servicos: IServicoContratadoForm[];
}

export interface IContratoCompletoFormRHF extends IContratoForm {
  servico: "";
  valor: number;
  servicos: { value: string; valor: number }[];
}

//

export interface IPageContratoDTO {
  content: IContratoDTO[];
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

export interface IContratoDTO {
  dataFinal: string;
  dataInicial: string;
  prestador: IPrestadorDTO;
  status: string;
  uuid: string;
}

//
