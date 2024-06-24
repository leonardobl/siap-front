import { AxiosResponse } from "axios";

import { SiapApi } from "../../Apis/SiapApi";
import { removeEmpty } from "../../Utils/removeEmpty";
import objectToParams from "../../Utils/objectToParams";
import { IPageRequest } from "../../Types/page";
import { IPageBancoDTO } from "../../Types/banco";

const basePath = "/banco";

export class Banco {
  static list(props?: IPageRequest): Promise<AxiosResponse<IPageBancoDTO>> {
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
