import { darken, lighten } from "polished";
import styled from "styled-components";

export const Table = styled.div``;

export const TableHeader = styled.div`
  display: none;

  @media (min-width: ${(props) => props.theme.screens.lg}) {
    border-radius: 12px;
    background: ${(props) => props.theme.colors["blue-300"]};
    height: 44px;
    padding: 0 16px;
    display: grid;
    align-items: center;
    grid-template-columns: 1.5fr 2fr 0.1fr;
    margin-bottom: 16px;

    > h2 {
      color: #fff;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 20px;
    }

    > h2 + h2 {
      padding-left: 16px;
    }
  }
`;

export const TableItens = styled.div``;

export const TableItem = styled.div`
  height: 44px;
  padding: 0 16px;
  display: grid;
  align-items: center;
  grid-template-columns: 1.5fr 2fr 0.1fr;
  border-radius: 12px;
  transition: all 0.2s ease-in-out;
  background: #fff;
  box-shadow: 0px 2px 3px 0px rgba(0, 0, 0, 0.16);

  > p {
    color: ${(props) => props.theme.colors["gray-200"]};
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
  }

  &:hover {
    > p {
      color: ${darken(0.2, "#9d9d9d")};
    }
    background: ${lighten(0.38, "#2082E3")};
  }

  > p + p,
  > div {
    padding-left: 16px;
    border-left: 1px solid ${(props) => props.theme.colors["gray-200"]};
  }

  > div {
    img {
      cursor: pointer;
      height: fit-content;
    }
  }

  & + div {
    margin-top: 16px;
  }
`;

export const TableMobileItens = styled.div``;

export const TableMobileItem = styled.div`
  border-radius: 12px;
  border: 0.3px solid ${(props) => props.theme.colors["gray-200"]};
  background: #fff;
  padding: 16px 8px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  & + div {
    margin-top: 24px;
  }

  > div:nth-child(1) {
    display: flex;
    flex-direction: column;
    gap: 16px;

    p {
      color: ${(props) => props.theme.colors["gray-200"]};
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 24px;
    }
    span {
      color: ${(props) => props.theme.colors["gray-200"]};
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 24px;
    }
  }

  > div:nth-child(2) {
    padding-left: 16px;
    border-left: 1px solid ${(props) => props.theme.colors["gray-200"]};
  }
`;
