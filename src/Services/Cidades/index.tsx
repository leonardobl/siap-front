import { AxiosResponse } from "axios";

import { SiapApi } from "../../Apis/SiapApi";
import { removeEmpty } from "../../Utils/removeEmpty";
import objectToParams from "../../Utils/objectToParams";
import { ICidadeProps, IPageCidadeDTO } from "../../Types/cidade";

const basePath = "/cidade";

export class Cidade {
  static get(props?: ICidadeProps): Promise<AxiosResponse<IPageCidadeDTO>> {
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
