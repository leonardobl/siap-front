import { AxiosResponse } from "axios";
import { SiapApi } from "../../Apis/SiapApi";
import {
  IAgendamentoAgendarFormProps,
  IAgendamentoCadastroForm,
  IAgendamentoDTO,
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

  static async getById(id: string): Promise<AxiosResponse<IAgendamentoDTO>> {
    return SiapApi.get(`${basePath}/${id}`);
  }

  static async post(
    data: IAgendamentoCadastroForm
  ): Promise<AxiosResponse<IAgendamentoDTO>> {
    return SiapApi.post(`${basePath}`, data);
  }

  static async put(
    data: IAgendamentoAgendarFormProps
  ): Promise<AxiosResponse<IAgendamentoDTO>> {
    const { uuid, ...rest } = data;
    return SiapApi.put(`${basePath}/${uuid}/agendar`, rest);
  }
}