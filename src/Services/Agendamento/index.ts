import { AxiosResponse } from "axios";
import { SiapApi } from "../../Apis/SiapApi";
import {
  IAgendamentoProps,
  IPageAgendamentoDTO,
} from "../../Types/agendamento";
import { removeEmpty } from "../../Utils/removeEmpty";
import objectToParams from "../../Utils/objectToParams";

const basePath = "/agendamento";

export class Agendamento {
  static async get(
    props?: IAgendamentoProps
  ): Promise<AxiosResponse<IPageAgendamentoDTO>> {
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
