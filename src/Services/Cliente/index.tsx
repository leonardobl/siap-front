import { AxiosResponse } from "axios";
import { IClienteDTO, IClienteForm } from "../../Types/cliente";
import { SiapApi } from "../../Apis/SiapApi";

const basePath = "/cliente";

export class Cliente {
  static post(props: IClienteForm): Promise<AxiosResponse<IClienteDTO>> {
    return SiapApi.post(`${basePath}/cadastrar`, props);
  }
}
