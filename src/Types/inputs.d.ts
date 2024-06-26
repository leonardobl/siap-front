import { ComponentProps } from "react";

export interface ISelectOptions {
  value: any;
  label: string;
  element?: any;
}

interface InputCustomProps extends ComponentProps<"input"> {
  label?: string;
  required?: boolean;
  iconleft?: string;
  iconright?: string;
}
