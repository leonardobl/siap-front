import { ComponentProps } from "react";

export interface IGroupMenuProps extends ComponentProps<"div"> {
  title: string;
  children: React.JSX.Element | React.JSX.Element[];
}
