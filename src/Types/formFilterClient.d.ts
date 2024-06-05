import { ComponentProps } from "react";
import { IClienteListPros } from "./cliente";

export interface IFormFilterClientProps extends ComponentProps<"form"> {
  submitForm: (data: IClienteListPros) => void;
}
