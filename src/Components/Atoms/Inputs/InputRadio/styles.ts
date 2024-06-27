import styled from "styled-components";

export const InpLabel = styled.label`
  height: 2.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 8rem;
  width: fit-content;
  border-radius: 0.75rem;
  border: 0.3px solid #5d7281;
  background: #fff;
  cursor: pointer;
  transition: all 0.15s linear;
  gap: 0 0.5rem;

  > span {
    color: #5d7281;
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.25rem;
  }

  &:has(> input[data-error="true"]) {
    border-color: ${(props) => props.theme.colors.red};
    > span {
      color: ${(props) => props.theme.colors.red};
    }

    > img {
      filter: brightness(0) saturate(100%) invert(19%) sepia(96%)
        saturate(7499%) hue-rotate(359deg) brightness(90%) contrast(108%);
    }
  }

  &:has(> input:checked) {
    border-color: ${(props) => props.theme.colors["blue-100"]};
    background: ${(props) => props.theme.colors["blue-100"]};

    > span {
      color: #fff;
    }

    > img {
      filter: brightness(0) saturate(100%) invert(100%) sepia(2%) saturate(10%)
        hue-rotate(58deg) brightness(104%) contrast(104%);
    }
  }

  @media (min-width: ${(props) => props.theme.screens.lg}) {
    min-width: 10rem;
  }
`;

export const InpRadio = styled.input`
  display: none;
`;
