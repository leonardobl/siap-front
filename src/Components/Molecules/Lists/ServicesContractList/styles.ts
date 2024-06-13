import { darken, lighten } from "polished";
import styled from "styled-components";

export const Table = styled.div`
  margin-bottom: 24px;
`;

export const TableHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 0.1fr;
  padding: 0 8px;
  align-items: center;
  height: 44px;
  margin-bottom: 16px;

  h2 {
    color: ${(props) => props.theme.colors["blue-300"]};
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px; /* 142.857% */
  }

  h2 + h2 {
    padding-left: 16px;
  }
`;

export const TableItens = styled.div``;

export const TableItem = styled.div`
  border-radius: 12px;
  background: #f6f6f6;
  box-shadow: 0px 2px 3px 0px rgba(0, 0, 0, 0.16);
  height: 44px;
  display: grid;
  grid-template-columns: 1fr 1fr 0.1fr;
  padding: 0 8px;
  transition: all 0.2s ease-in-out;
  align-items: center;

  > p {
    color: ${(props) => props.theme.colors["gray-200"]};
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 12px;
  }

  > p + p {
    padding-left: 16px;
    border-left: 1px solid ${(props) => props.theme.colors["gray-200"]};
  }

  & + div {
    margin-top: 16px;
  }

  > div {
    padding-left: 16px;
    height: fit-content;
    border-left: 1px solid ${(props) => props.theme.colors["gray-200"]};

    > img {
      display: block;
      cursor: pointer;
    }
  }

  &:hover {
    > p {
      color: ${darken(0.2, "#9d9d9d")};
    }
    background: ${lighten(0.38, "#2082E3")};
  }
`;
