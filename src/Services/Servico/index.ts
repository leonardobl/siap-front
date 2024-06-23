import { AxiosResponse } from "axios";
import { SiapApi } from "../../Apis/SiapApi";
import {
  IPageServicoDTO,
  IServicoDTO,
  IServicoForm,
  IServicoProps,
} from "../../Types/servico";
import { removeEmpty } from "../../Utils/removeEmpty";
import objectToParams from "../../Utils/objectToParams";

const basePath = "servico";

export class Servico {
  static async list(
    props?: IServicoProps
  ): Promise<AxiosResponse<IPageServicoDTO>> {
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
    props: IServicoForm
  ): Promise<AxiosResponse<IServicoDTO>> {
    return SiapApi.post(`${basePath}/cadastrar`, props);
  }
}
