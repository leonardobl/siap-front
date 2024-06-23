import { AxiosResponse } from "axios";
import {
  IClienteDTO,
  IClienteForm,
  IClienteListPros,
  IPageClienteDTO,
} from "../../Types/cliente";
import { SiapApi } from "../../Apis/SiapApi";
import { removeEmpty } from "../../Utils/removeEmpty";
import objectToParams from "../../Utils/objectToParams";

const basePath = "/cliente";

export class Cliente {
  static post(props: IClienteForm): Promise<AxiosResponse<IClienteDTO>> {
    return SiapApi.post(`${basePath}/cadastrar`, props);
  }

  static list(
    props?: IClienteListPros
  ): Promise<AxiosResponse<IPageClienteDTO>> {
    let params = "";

    if (props) {
      const values = removeEmpty(props);
      params = objectToParams(values);
    }

    return SiapApi.get(
      params ? `${basePath}/listar?${params}` : `${basePath}/listar`
    );
  }

  static byId({ uuid }: { uuid: string }): Promise<AxiosResponse<IClienteDTO>> {
    return SiapApi.get(`${basePath}/${uuid}`);
  }
}
