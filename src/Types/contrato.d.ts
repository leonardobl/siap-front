import { IDadosFinanceirosDTO } from "./banco";
import { IEnderecoDTO } from "./endereco";
import { IPageRequest } from "./page";

export interface IContratoCompletoDTO {
  dataFinal: string;
  dataInicial: string;
  prestador: IPrestadorDTO;
  servicos: IServicoContratadoDTO[];
  status: string;
  uuid: string;
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

export interface ITipoPrestadorDTO {
  nome: string;
}

export interface IServicoContratadoDTO {
  servico: IServicoDTO;
  uuid: string;
  valor: number;
}

export interface IServicoDTO {
  nome: string;
  uuid: string;
}

export interface IContratoListProps extends IPageRequest {
  nome?: string;
  cnpj?: string;
  razaoSocial?: string;
  dataInicio?: string;
  dataFim?: string;
  servico?: string;
}

export interface IContratoForm {
  dataFinal: string;
  dataInicial: string;
  uuidPrestador: string;
}

export interface IServicoContratadoForm {
  uuidServico: string;
  valor: number;
}

export interface IContratoCompletoForm extends IContratoForm {
  servicos: IServicoContratadoForm[];
}
