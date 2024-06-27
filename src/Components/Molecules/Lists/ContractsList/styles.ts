import { darken, lighten } from "polished";
import styled from "styled-components";

export const Table = styled.div`
  width: 100%;
  max-width: 890px;
`;

export const TableHeader = styled.div`
  display: none;

  @media (min-width: ${(props) => props.theme.screens.lg}) {
    width: 100%;
    height: 44px;
    display: grid;
    align-items: center;
    border-radius: 12px;
    background: ${(props) => props.theme.colors["blue-300"]};
    padding: 0 24px;
    margin-bottom: 16px;
    grid-template-columns: 2fr 1fr 1fr 1fr 0.1fr;

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
  display: grid;
  height: 44px;
  padding: 0 24px;
  grid-template-columns: 2fr 1fr 1fr 1fr 0.1fr;
  border-radius: 12px;
  background: #fff;
  align-items: center;
  box-shadow: 0px 2px 3px 0px rgba(0, 0, 0, 0.16);
  transition: all 0.2s ease-in-out;

  > p {
    color: ${(props) => props.theme.colors["gray-200"]};
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
  }

  > p + p {
    padding-left: 16px;
    border-left: 1px solid ${(props) => props.theme.colors["gray-200"]};
  }

  > div {
    padding-left: 8px;
    border-left: 1px solid ${(props) => props.theme.colors["gray-200"]};

    > img {
      cursor: pointer;
    }
  }

  & + div {
    margin-top: 16px;
  }

  &:hover {
    > p {
      color: ${darken(0.2, "#9d9d9d")};
    }
    background: ${lighten(0.38, "#2082E3")};
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
    margin-top: 32px;
  }

  > div:nth-child(2) {
    padding-left: 16px;
    border-left: 1px solid ${(props) => props.theme.colors["gray-200"]};
  }

  > div.WrapperContent {
    display: flex;
    flex-direction: column;
    gap: 16px 0;

    > p {
      color: ${(props) => props.theme.colors["gray-200"]};
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 24px;
    }
  }
`;
