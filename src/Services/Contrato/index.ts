import { AxiosResponse } from "axios";
import { SiapApi } from "../../Apis/SiapApi";
import { IContratoListProps, IPageContratoDTO } from "../../Types/contrato";
import { removeEmpty } from "../../Utils/removeEmpty";
import objectToParams from "../../Utils/objectToParams";

const basePath = "/contrato";

export class Contrato {
  static async list(
    props?: IContratoListProps
  ): Promise<AxiosResponse<IPageContratoDTO>> {
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
