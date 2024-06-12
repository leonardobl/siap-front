import { darken, lighten } from "polished";
import styled from "styled-components";

export const Table = styled.div`
  max-width: 890px;
  width: 100%;
  margin: 0 auto;
`;

export const TableHeader = styled.div`
  display: none;

  @media (min-width: ${(props) => props.theme.screens.lg}) {
    border-radius: 12px;
    background: ${(props) => props.theme.colors["blue-300"]};
    padding: 0 24px;
    display: grid;
    height: 44px;
    align-items: center;
    margin-bottom: 16px;
    grid-template-columns: 2fr 1fr 1fr 1fr 0.2fr;

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
  border-radius: 12px;
  background: #fff;
  height: 44px;
  box-shadow: 0px 2px 3px 0px rgba(0, 0, 0, 0.16);
  padding: 0 24px;
  display: grid;
  align-items: center;
  transition: all 0.2s ease-in-out;
  grid-template-columns: 2fr 1fr 1fr 1fr 0.2fr;

  & + div {
    margin-top: 16px;
  }

  @media (min-width: ${(props) => props.theme.screens.lg}) {
    > p {
      color: #9d9d9d;
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
      padding-left: 16px;
      border-left: 1px solid ${(props) => props.theme.colors["gray-200"]};
    }

    img {
      cursor: pointer;
    }

    &:hover {
      background: ${lighten(0.38, "#2082E3")};

      p {
        color: ${darken(0.2, "#9d9d9d")};
      }
    }
  }
`;

export const TableMobileItens = styled.div``;

export const TableMobileItem = styled.div`
  border-radius: 12px;
  border: 0.3px solid ${(props) => props.theme.colors["gray-200"]};
  background: #fff;
  box-shadow: 0px 2px 3px 0px rgba(0, 0, 0, 0.16);

  padding: 16px 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  & + div {
    margin-top: 16px;
  }

  > div.wrapperEye {
    display: block;
    padding-left: 16px;
    border-left: 1px solid ${(props) => props.theme.colors["gray-200"]};
  }

  > div {
    display: flex;
    flex-direction: column;
    gap: 16px 0;

    p {
      color: ${(props) => props.theme.colors["gray-200"]};
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 24px;
    }

    span {
      color: ${(props) => props.theme.colors["blue-300"]};
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 24px;
    }
  }
`;
