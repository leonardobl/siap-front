import styled from "styled-components";
import { IStatusProps } from "./index";

export const MyStatus = styled.p<IStatusProps>`
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  color: ${(props) => props.textcolor} !important;
`;
