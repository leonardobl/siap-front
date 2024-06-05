import { darken, lighten } from "polished";
import styled from "styled-components";

export const Table = styled.div`
  width: 100%;
  max-width: 890px;
`;

export const TableHeader = styled.div`
  display: none;

  @media (min-width: ${(props) => props.theme.screens.lg}) {
    display: block;
    margin-bottom: 16px;
    background-color: ${(props) => props.theme.colors["blue-300"]};
    border-radius: 12px;
    display: grid;
    grid-template-columns: 2fr 2fr 0.1fr;
    padding: 12px 16px;

    h2 {
      color: #fff;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
    }
  }
`;

export const TableItems = styled.div``;

export const TableItem = styled.div`
  border-radius: 12px;
  background: #fff;
  box-shadow: 0px 2px 3px 0px rgba(0, 0, 0, 0.16);
  display: grid;
  grid-template-columns: 1fr 0.1fr;
  grid-template-areas: "nome eye" "cpf eye";
  align-items: center;
  padding: 12px 8px;
  gap: 16px 0;
  color: ${(props) => props.theme.colors["gray-200"]};
  transition: color 0.3s linear;

  > :nth-child(1) {
    grid-area: nome;
  }

  > :nth-child(2) {
    grid-area: cpf;
  }

  > :nth-child(3) {
    grid-area: eye;
  }

  > p {
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
  }

  & + div {
    margin-top: 16px;
  }

  div.wrapper-eye {
    border-left: 1px solid ${(props) => props.theme.colors["gray-200"]};
    padding-left: 8px;
    height: fit-content;
    width: fit-content;

    > img {
      display: block;
      cursor: pointer;
    }
  }

  @media (min-width: ${(props) => props.theme.screens.lg}) {
    padding: 12px 16px;
    grid-template-columns: 2fr 2fr 0.1fr;
    grid-template-areas: "nome cpf eye";

    &:hover {
      color: ${darken(0.2, "#9d9d9d")};
      background: ${lighten(0.38, "#2082E3")};
    }
  }
`;
