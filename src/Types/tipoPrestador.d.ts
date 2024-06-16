import { IPageRequest, IPageableObject, ISortObject } from "./page";

export interface ITipoPrestadorProps extends IPageRequest {
  nome?: string;
}

export interface IPageTipoPrestadorDTO {
  content: ITipoPrestadorDTO[];
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

export interface ITipoPrestadorDTO {
  nome: string;
}
