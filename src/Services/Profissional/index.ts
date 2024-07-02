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
    props?: IProfissionalListProps
  ): Promise<AxiosResponse<IPageProfissionalDTO>> {
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
    props: IProfissionalForm
  ): Promise<AxiosResponse<IProfissionalDTO>> {
    return SiapApi.post(`${basePath}/cadastrar`, props);
  }

  static async getById(id: string): Promise<AxiosResponse<IProfissionalDTO>> {
    return SiapApi.get(`${basePath}/${id}`);
  }
}
