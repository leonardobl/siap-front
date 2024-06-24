import { StatusEnum } from "../Enum/status";
import { IDadosFinanceirosDTO } from "./banco";
import { IEnderecoDTO } from "./endereco";
import { IPageRequest, IPageableObject, ISortObject } from "./page";
import { ITipoPrestadorDTO } from "./tipoPrestador";

export interface IPrestadorProps extends IPageRequest {
  nome?: string;
  cnpj?: string;
  status?: StatusEnum | string;
  tipo?: string;
  cidade?: string;
}

export interface IPagePrestadorDTO {
  content: IPrestadorDTO[];
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

export interface IPrestadorDTO {
  cnpj: string;
  dadosfinanceiros: IDadosFinanceirosDTO;
  email: string;
  endereco: IEnderecoDTO;
  inscEstadual: string;
  inscMunicipal: string;
  nome: string;
  razaoSocial: string;
  status: string;
  telefone: string;
  tipo: ITipoPrestadorDTO;
  uuid: string;
}

export interface IPrestadorForm {
  cnpj: string;
  email: string;
  endereco?: IEnderecoDTO;
  inscEstadual?: string;
  inscMunicipal?: string;
  nome: string;
  razaoSocial: string;
  telefone: string;
  tipoNome: string;
}

export interface IDadosFinanceirosForm {
  agencia: string;
  codigoBanco: string;
  conta: string;
  operacao?: string;
}

export interface IVinculoPrestadorFinanceiro extends IDadosFinanceirosForm {
  uuid: string;
}
