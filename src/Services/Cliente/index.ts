import { AxiosResponse } from "axios";

import {
  IClienteDTO,
  IClienteForm,
  IConcessionariaProps,
  IPageClienteDTO,
} from "../../Types/cliente";

import { IPageRequest } from "../../Types/page";
import objectToParams from "../../Utils/objectToParams";
import { removeEmpty } from "../../Utils/removeEmpty";
import { ApiBrave } from "../../Apis/Brave";

const basePath = "/cliente";

interface IClienteList extends IPageRequest {
  nomeCpfCnpj: string;
}

export class Cliente {
  static async post(props: IClienteForm): Promise<AxiosResponse<IClienteDTO>> {
    return ApiBrave.post(`${basePath}`, props);
  }

  static async getConcessionarias(
    props?: IConcessionariaProps
  ): Promise<AxiosResponse<IPageClienteDTO>> {
    const values = removeEmpty(props);
    const params = objectToParams(values);
    return ApiBrave.get(
      params
        ? `${basePath}/listar-concessionarias?${params}`
        : `${basePath}/listar-concessionarias`
    );
  }

  static async lista(
    props: IClienteList
  ): Promise<AxiosResponse<IPageClienteDTO>> {
    const params = objectToParams(props);
    return ApiBrave.get(`${basePath}/listar?${params}`);
  }

  static async getByUsuario({
    uuidUsuario,
  }: {
    uuidUsuario: string;
  }): Promise<AxiosResponse<IClienteDTO>> {
    return ApiBrave.get(`${basePath}/usuario/${uuidUsuario}`);
  }

  static async atualizar(
    props: IClienteForm
  ): Promise<AxiosResponse<IClienteDTO>> {
    return ApiBrave.post(`${basePath}/atualizar`, props);
  }

  static async byId({
    uuidCliente,
  }: {
    uuidCliente: string;
  }): Promise<AxiosResponse<IClienteDTO>> {
    return ApiBrave.get(`${basePath}/buscar/${uuidCliente}`);
  }
}
