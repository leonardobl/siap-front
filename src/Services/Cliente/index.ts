import { AxiosResponse } from "axios";

import { IClienteDTO, IClienteForm } from "../../Types/cliente";

import { ApiBrave } from "../../Apis/Brave";

const basePath = "/cliente";

export class Cliente {
  static async post(props: IClienteForm): Promise<AxiosResponse<IClienteDTO>> {
    return ApiBrave.post(`${basePath}`, props);
  }
}
