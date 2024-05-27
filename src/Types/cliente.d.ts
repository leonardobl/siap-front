import { TipoClienteEnum } from "../enums/tipoCliente";

export interface IClienteForm {
  cpfCnpj: string;
  email?: string;
  endereco?: IEnderecoDTO;
  nome: string;
  senha?: string;
  telefone?: string;
  tipo: TipoClienteEnum;
  uuid?: string;
}

export interface IClienteDTO {
  cpfCnpj: string;
  email: string;
  endereco?: IEnderecoDTO;
  nome: string;
  uuid: string;
  telefone: string;
  tipo: TipoClienteEnum;
}

export interface IEnderecoDTO {
  bairro: string;
  cep: string;
  cidade: string;
  complemento?: string;
  logradouro: string;
  numero?: string;
  uf: string;
  uuid?: string;
}
