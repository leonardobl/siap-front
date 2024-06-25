import { AxiosResponse } from "axios";
import {
  IPagePrestadorDTO,
  IPrestadorDTO,
  IPrestadorForm,
  IVinculoPrestadorFinanceiro,
} from "../../Types/prestador";
import { SiapApi } from "../../Apis/SiapApi";
import { IPageRequest } from "../../Types/page";
import { removeEmpty } from "../../Utils/removeEmpty";
import objectToParams from "../../Utils/objectToParams";

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

  static async list(
    props?: IPageRequest
  ): Promise<AxiosResponse<IPagePrestadorDTO>> {
    let params = "";

    if (props) {
      const values = removeEmpty(props);
      params = objectToParams(values);
    }
    return SiapApi.get(
      params ? `${basePath}/listar?${params}` : `${basePath}/listar`
    );
  }
}
