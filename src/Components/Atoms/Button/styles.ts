import styled from "styled-components";

export const MyButton = styled.button`
  height: 34px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0 8px;
  width: fit-content;
  box-shadow: 2px 2px 2px 0px rgba(0, 0, 0, 0.16);
  padding: 7px 18px;
  border-radius: 12px;
  border: 0.3px solid #9d9d9d;
  background: #fff;
  box-shadow: 2px 2px 2px 0px rgba(0, 0, 0, 0.16);

  color: #5d7281;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;

  &:active {
    color: ${(props) => props.theme.colors["blue-100"]};
    > img {
      filter: brightness(0) saturate(100%) invert(42%) sepia(91%)
        saturate(2305%) hue-rotate(192deg) brightness(93%) contrast(91%);
    }
  }

  &:disabled {
    cursor: default;
    color: ${(props) => props.theme.colors["gray-200"]};

    > img {
      filter: brightness(0) saturate(100%) invert(66%) sepia(1%) saturate(530%)
        hue-rotate(336deg) brightness(97%) contrast(82%);
    }
  }
`;
