import { ComponentProps } from "react";

export interface IDetailsMenuProps extends ComponentProps<"details"> {
  title: string;
  children: React.JSX.Element | React.JSX.Element[];
}
