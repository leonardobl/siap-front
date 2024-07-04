import { IEnderecoDTO } from "./endereco";
import { IPageRequest } from "./page";

export interface IClienteForm {
  cpf: string;
  email: string;
  endereco: IEnderecoDTO;
  nome: string;
  senha: string;
  telefone: string;
}

export interface IClienteDTO {
  cpf: string;
  createdAt: string;
  email: string;
  endereco: IEnderecoDTO;
  nome: string;
  telefone: string;
  uuid: string;
  uuidUsuario: string;
}

export interface IPageClienteDTO {
  content: IClienteDTO[];
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

export interface IClienteListPros extends IPageRequest {
  nome?: string;
  cpf?: string;
  telefone?: string;
  email?: string;
}
