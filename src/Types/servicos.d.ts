import { IPageRequest } from "./page";

export interface IServicosListProps extends IPageRequest {
  nome?: string;
}

export interface IServicoForm {
  nome?: string;
}
