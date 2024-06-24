import { ConselhoEnum } from "../Enum/conselho";
import { IPageRequest, IPageableObject, ISortObject } from "./page";

export interface IProfissionalListProps extends IPageRequest {
  uuidPrestador: string;
  nome?: string;
  cpf?: string;
  conselho?: ConselhoEnum;
  numeroConselho?: string;
}

export interface IProfissionalDTO {
  conselho: ConselhoEnum;
  cpf: string;
  email: string;
  nome: string;
  numeroConselho: string;
  telefone: string;
  ufConselho: string;
  uuid: string;
}

export interface IProfissionalForm {
  conselho: ConselhoEnum;
  cpf: string;
  email?: string;
  nome: string;
  numeroConselho: string;
  telefone?: string;
  ufConselho: string;
  uuidPrestador: string;
}

export interface IPageProfissionalDTO {
  content: IProfissionalDTO[];
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
