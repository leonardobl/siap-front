import { UfEnum } from "../Enum/uf";
import { ICidadeDTO } from "./endereco";
import { IPageRequest, IPageableObject, ISortObject } from "./page";

export interface ICidadeProps extends IPageRequest {
  nome?: string;
  uf?: UfEnum;
}

export interface IPageCidadeDTO {
  content: ICidadeDTO[];
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
