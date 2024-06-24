import { AxiosResponse } from "axios";
import {
  IPrestadorDTO,
  IPrestadorForm,
  IVinculoPrestadorFinanceiro,
} from "../../Types/prestador";
import { SiapApi } from "../../Apis/SiapApi";

const basePath = "/prestador";

export class Prestador {
  static async create(
    data: IPrestadorForm
  ): Promise<AxiosResponse<IPrestadorDTO>> {
    return SiapApi.post(`${basePath}/cadastrar`, data);
  }

  static async vincular_dados_financeiros(
    data: IVinculoPrestadorFinanceiro
  ): Promise<AxiosResponse<IPrestadorDTO>> {
    const { uuid, ...rest } = data;
    return SiapApi.post(`${basePath}/${uuid}/vincular-dados-financeiros`, rest);
  }
}
