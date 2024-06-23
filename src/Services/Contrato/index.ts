import { AxiosResponse } from "axios";

const basePath = "/contrato";

export class Contrato {
  static async list(): Promise<AxiosResponse<any>> {
    return SiapApi.get(basePath);
  }
}
