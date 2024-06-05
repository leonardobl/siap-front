import { ComponentProps } from "react";

export interface IButtonProps extends ComponentProps<"button"> {
  iconleft?: string;
  variant?: "blue";
}
