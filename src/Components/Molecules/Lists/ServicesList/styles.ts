import { darken, lighten } from "polished";
import styled from "styled-components";

export const Table = styled.div``;

export const TableHeader = styled.div`
  display: none;

  @media (min-width: ${(props) => props.theme.screens.lg}) {
    display: flex;
    height: 44px;
    align-items: center;
    padding: 0 24px;
    border-radius: 12px;
    background: ${(props) => props.theme.colors["blue-300"]};
    margin-bottom: 16px;

    > h2 {
      color: #fff;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 20px;
    }
  }
`;

export const TableItens = styled.div``;

export const TableItem = styled.div`
  border-radius: 12px;
  background: #fff;
  height: 44px;
  box-shadow: 0px 2px 3px 0px rgba(0, 0, 0, 0.16);
  display: flex;
  align-items: center;
  padding: 0 24px;
  transition: all 0.2s ease-in-out;

  > p {
    color: ${(props) => props.theme.colors["gray-200"]};
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
  }

  & + div {
    margin-top: 24px;
  }

  @media (min-width: ${(props) => props.theme.screens.lg}) {
    & + div {
      margin-top: 16px;
    }

    &:hover {
      background: ${lighten(0.38, "#2082E3")};

      > p {
        color: ${darken(0.2, "#9d9d9d")};
      }
    }
  }
`;
