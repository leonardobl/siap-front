import { TipoPessoaEnum } from "../enums/pessoas";
import { IPageRequest } from "./page";

interface IUsuarioForm {
  cpfCnpj: string;
  email?: string;
  nome: string;
  senha: string;
  telefone?: string;
  tipoPessoa?: TipoPessoaEnum;
  uuid: string;
}

export interface IUsuarioDTO {
  authorities: IAuthority[];
  cpfCnpj: string;
  email: string;
  nome: string;
  telefone: string;
  tipoPessoa?: TipoPessoaEnum;
  uuid: string;
}

export interface INovaSenhaForm {
  codigo: string;
  cpfCnpj: string;
  senha: string;
}

export interface IUsuarioCompletoDTO {
  authorities: IAuthority[];
  cpfCnpj: string;
  email: string;
  nome: string;
  senha: string;
  telefone: string;
  tipoPessoa: string;
  uuid: string;
}

export interface IAuthority {
  ativo: boolean;
  authority?: string;
  createdAt: string;
  id: number;
  nome: string;
  rescursos?: IAuthority[];
  updateReason: string;
  updatedAt: string;
  userNameUpdate: string;
  uuid: string;
  uuidUserUpdate: string;
  version: number;
}

export interface IUsuariosListProps extends IPageRequest {
  nome?: string;
  cpfCnpj?: string;
  telefone?: string;
  email?: string;
}
