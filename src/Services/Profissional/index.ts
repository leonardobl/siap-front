import { AxiosResponse } from "axios";

import { SiapApi } from "../../Apis/SiapApi";
import {
  IPageProfissionalDTO,
  IProfissionalDTO,
  IProfissionalForm,
  IProfissionalListProps,
} from "../../Types/profissional";
import { removeEmpty } from "../../Utils/removeEmpty";
import objectToParams from "../../Utils/objectToParams";

const basePath = "/profissional";

export class Profissional {
  static async list(
    props: IProfissionalListProps
  ): Promise<AxiosResponse<IPageProfissionalDTO>> {
    const values = removeEmpty(props);
    const params = objectToParams(values);
    return SiapApi.get(`${basePath}/listar?${params}`);
  }

  static async create(
    props: IProfissionalForm
  ): Promise<AxiosResponse<IProfissionalDTO>> {
    return SiapApi.post(`${basePath}/cadastrar`, props);
  }
}
