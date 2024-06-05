import { ComponentProps } from "react";

export interface IFormFilterClientProps extends ComponentProps<"form"> {
  submitForm: () => void;
}
