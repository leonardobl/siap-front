import { darken, lighten } from "polished";
import styled from "styled-components";

export const Table = styled.div`
  width: 100%;
  max-width: 1020px;
`;

export const TableHeader = styled.div`
  display: none;

  @media (min-width: ${(props) => props.theme.screens.lg}) {
    display: grid;
    border-radius: 12px;
    background: ${(props) => props.theme.colors["blue-300"]};
    padding: 12px 16px;
    grid-template-columns: 2fr 1.5fr 1fr 1fr 1fr 0.2fr;
    margin-bottom: 16px;

    h2 {
      color: #fff;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 20px;
    }

    h2 + h2 {
      padding-left: 16px;
    }
  }
`;

export const Status = styled.p`
  text-transform: capitalize;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;

  &[data-ativo="true"] {
    color: ${(props) => props.theme.colors["blue-50"]};
  }

  &[data-suspenso="true"] {
    color: ${(props) => props.theme.colors["yellow"]};
  }
`;

export const TableItens = styled.div``;

export const TableItem = styled.div`
  padding: 12px 16px;
  display: grid;
  grid-template-columns: 2fr 1.5fr 1fr 1fr 1fr 0.2fr;
  border-radius: 12px;
  background: #fff;
  align-items: center;
  transition: all 0.2s ease-in-out;
  box-shadow: 0px 2px 3px 0px rgba(0, 0, 0, 0.16);

  p {
    color: ${(props) => props.theme.colors["gray-200"]};
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
  }

  img {
    cursor: pointer;
  }

  & + div {
    margin-top: 16px;
  }

  @media (min-width: ${(props) => props.theme.screens.lg}) {
    p + p {
      border-left: 1px solid ${(props) => props.theme.colors["gray-200"]};
      padding-left: 16px;
    }

    &:hover {
      background: ${lighten(0.38, "#2082E3")};

      > p {
        color: ${darken(0.2, "#9d9d9d")};
      }
    }
  }
`;

export const TableItensMobile = styled.div``;

export const TableItemMobile = styled.div`
  border-radius: 12px;
  border: 0.3px solid ${(props) => props.theme.colors["gray-200"]};
  background: #fff;
  padding: 16px 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 2px 3px 0px rgba(0, 0, 0, 0.16);

  > div {
    display: flex;
    flex-direction: column;
    gap: 16px;

    > p {
      color: ${(props) => props.theme.colors["gray-200"]};
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 24px;
    }
  }

  & + div {
    margin-top: 24px;
  }
`;
