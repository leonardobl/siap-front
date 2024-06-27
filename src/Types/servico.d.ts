import { IPageRequest, IPageableObject, ISortObject } from "./page";

interface IServicoProps extends IPageRequest {
  nome?: string;
}

export interface IPageServicoDTO {
  content: IServicoDTO[];
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

export interface IServicoDTO {
  nome: string;
  uuid: string;
}

export interface IServicoForm {
  nome: string;
}

export interface IServicoContratadoForm {
  uuidServico: string;
  valor: number;
}
