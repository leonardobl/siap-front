import { IEnderecoDTO } from "./endereco";

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
