export interface IFaturaDTO {
  boleto: IBoletoDTO;
  dataAutorizacao: string;
  dataCancelamento: string;
  dataDevolucao: string;
  dataEstorno: string;
  dataExpiracao: string;
  dataProtesto: string;
  idReferencia: string;
  pix: IPixDTO;
  status: string;
  url: string;
  uuid: string;
  valorTotal: number;
  vencimento: string;
}

export interface IBoletoDTO {
  barCode: string;
  barCodeData: string;
  digitableLine: string;
}

export interface IPixDTO {
  qrcode: string;
  qrcodeText: string;
}
