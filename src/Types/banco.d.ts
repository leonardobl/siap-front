import { IPageableObject, ISortObject } from "./page";

export interface IDadosFinanceirosDTO {
  agencia: string;
  banco: IBancoDTO;
  conta: string;
  operacao: string;
}

export interface IBancoDTO {
  codigo: string;
  nome: string;
}

export interface IPageBancoDTO {
  content: IBancoDTO[];
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
