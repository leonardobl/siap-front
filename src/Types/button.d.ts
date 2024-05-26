import { ComponentProps } from "react";

export interface IButtonProps extends ComponentProps<"button"> {
  iconLeft?: string;
  variant?: "blue";
}
