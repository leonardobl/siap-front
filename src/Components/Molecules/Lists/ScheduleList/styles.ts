import { darken, lighten } from "polished";
import styled from "styled-components";

export const Container = styled.div``;

export const Table = styled.div``;

export const Tableheader = styled.div`
  display: none;

  @media (min-width: ${(props) => props.theme.screens.lg}) {
    height: 2.75rem;
    align-items: center;
    padding: 0 1rem;
    display: grid;
    border-radius: 0.75rem;
    background: ${(props) => props.theme.colors["blue-300"]};
    grid-template-columns: 1.2fr 0.8fr 0.8fr 0.8fr 0.9fr 0.9fr 0.1fr;
    margin-bottom: 1rem;

    > h3 {
      color: #fff;
      font-size: 1rem;
      font-style: normal;
      font-weight: 400;
      line-height: 1.25rem;
    }

    > h3 + h3 {
      padding-left: 1rem;
    }
  }
`;

export const TableItems = styled.div``;

export const TableItem = styled.div`
  grid-template-columns: 1.2fr 0.8fr 0.8fr 0.8fr 0.9fr 0.9fr 0.1fr;
  display: grid;
  padding: 0 1rem;
  align-items: center;
  height: 2.75rem;
  border-radius: 0.75rem;
  background: #fff;
  box-shadow: 0px 2px 3px 0px rgba(0, 0, 0, 0.16);
  transition: all 0.2s ease-in-out;

  > p {
    height: fit-content;
    color: ${(props) => props.theme.colors["gray-200"]};
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.125rem;
  }

  > p + p {
    padding-left: 0.5rem;
    border-left: 1px solid ${(props) => props.theme.colors["gray-200"]};
  }

  & + div {
    margin-top: 1rem;
  }

  &:hover {
    background: ${lighten(0.38, "#2082E3")};
    > p {
      color: ${darken(0.2, "#9d9d9d")};
    }
  }
`;

export const WrapperIconEye = styled.div`
  padding-left: 0.5rem;
  min-height: 20px;
  height: 100%;
  border-left: 1px solid ${(props) => props.theme.colors["gray-200"]};
  display: flex;
  align-items: center;

  > img {
    cursor: pointer;
    display: block;
  }

  @media (min-width: ${(props) => props.theme.screens.lg}) {
    max-height: 40%;
  }
`;

export const StatusAgendamento = styled.span<{ statuscolor: string }>`
  color: ${(props) => props.statuscolor};
  height: fit-content;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.125rem;

  @media (min-width: ${(props) => props.theme.screens.lg}) {
    font-size: 0.875rem;
    padding-left: 0.5rem;
    border-left: 1px solid ${(props) => props.theme.colors["gray-200"]};
  }
`;

export const TableMobileItems = styled.div``;

export const TableMobileItem = styled.div`
  border-radius: 0.75rem;
  border: 0.3px solid #9d9d9d;
  background: #fff;
  padding: 1rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  > img {
    padding-left: 0.5rem;
    display: block;
    height: fit-content;
    border-left: 1px solid ${(props) => props.theme.colors["gray-200"]};
  }

  & + div {
    margin-top: 1.56rem;
  }
`;

export const WrapperContentMobile = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.62rem 0;

  > p {
    color: #9d9d9d;
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.125rem;
  }

  > div {
    display: flex;
    gap: 0 2rem;
  }

  > div span:first-child {
    color: #9d9d9d;
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.125rem;
  }
`;
