import { ComponentProps } from "react";

export interface IDetailsMenuProps extends ComponentProps<"details"> {
  titleheader: string;
  children: React.JSX.Element | React.JSX.Element[];
}
