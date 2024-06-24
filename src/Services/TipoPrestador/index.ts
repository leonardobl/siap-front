import { AxiosResponse } from "axios";
import {
  IPageTipoPrestadorDTO,
  ITipoPrestadorDTO,
  ITipoPrestadorProps,
} from "../../Types/tipoPrestador";
import { SiapApi } from "../../Apis/SiapApi";
import { removeEmpty } from "../../Utils/removeEmpty";
import objectToParams from "../../Utils/objectToParams";

const basePath = "/tipo-prestador";

export class TipoPrestador {
  static async list(
    props?: ITipoPrestadorProps
  ): Promise<AxiosResponse<IPageTipoPrestadorDTO>> {
    let params = "";

    if (props) {
      const values = removeEmpty(props);
      params = objectToParams(values);
    }

    return SiapApi.get(
      params ? `${basePath}/listar?${params}` : `${basePath}/listar`
    );
  }

  static async create(
    props: ITipoPrestadorDTO
  ): Promise<AxiosResponse<ITipoPrestadorDTO>> {
    return SiapApi.post(`${basePath}/cadastrar`, props);
  }
}
