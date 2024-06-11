import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 970px;
  margin: 0 auto;
  border-radius: 12px;
  background: #fff;
  box-shadow: 3px 2px 3px 0px rgba(0, 0, 0, 0.16);
  overflow: hidden;
`;

export const Headers = styled.div`
  display: flex;
`;

export const TabItem = styled.button`
  border: none;
  background-color: transparent;
  flex: 1;
  height: 60px;
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: center;

  background: #f0f0f0;
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.16) inset;

  color: ${(props) => props.theme.colors["gray-200"]};
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;

  &[data-active="true"] {
    color: ${(props) => props.theme.colors["blue-100"]};
    background: #fff;
    box-shadow: none;
  }

  @media (min-width: ${(props) => props.theme.screens.lg}) {
    font-size: 20px;
  }
`;

export const TabContent = styled.div`
  padding: 32px;
`;
