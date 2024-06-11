export interface IDadosFinanceirosDTO {
  agencia: string;
  banco: IBancoDTO;
  conta: string;
  operacao: string;
}

export interface IBancoDTO {
  codigo: string;
  nome: string;
}
