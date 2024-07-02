import { AxiosResponse } from "axios";
import { SiapApi } from "../../Apis/SiapApi";
import {
  IAgendamentoProps,
  IPageAgendamentoDTO,
} from "../../Types/agendamento";

const basePath = "/agendamento";

export class Agendamento {
  static async get(
    props?: IAgendamentoProps
  ): Promise<AxiosResponse<IPageAgendamentoDTO>> {
    return SiapApi.get(`${basePath}/listar`);
  }
}
