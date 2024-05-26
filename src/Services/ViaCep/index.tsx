import { AxiosResponse } from "axios";

import { ApiViaCep } from "../../Apis/ViaCepApi";
import { IViaCepV2 } from "../../Types/viaCep";

export class ViaCep {
  static async get(cep: string): Promise<AxiosResponse<IViaCepV2>> {
    return ApiViaCep.get(`/${cep}/json`);
  }
}
