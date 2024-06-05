export interface IEnderecoDTO {
  bairro: string;
  cep: string;
  cidade: ICidadeDTO;
  complemento: string;
  logradouro: string;
  numero: string;
  uf: string;
}

export interface ICidadeDTO {
  nome: string;
  uf: string;
}
