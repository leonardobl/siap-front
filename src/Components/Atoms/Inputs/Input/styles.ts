import styled, { css } from "styled-components";
import { InputCustomProps } from "../../../../Types/inputs";
import { darken } from "polished";

export const Container = styled.div`
  position: relative;

  > img {
    cursor: pointer;
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    padding: 4px;
  }

  > img#iconLeft {
    position: absolute;
    left: 10px;
  }

  > img#iconRight {
    padding-left: 1rem;
    display: block;
    cursor: default;
    height: fit-content;
    border-left: 1px solid ${(props) => props.theme.colors["gray-200"]};
  }
`;

export const MyInput = styled.input<InputCustomProps>`
  height: 36px;
  border-radius: 12px;
  outline: none;
  letter-spacing: 1px;
  border: 1px solid ${(props) => props.theme.colors["gray-200"]};
  transition: all 0.2s ease-in-out;

  &::placeholder {
    color: ${(props) => (props.placeholder ? "" : "transparent")};
  }

  &:focus + label {
    top: -1px;
  }

  &:not(:placeholder-shown) + label {
    top: -1px;
  }

  width: 100%;
  height: 36px;
  border-radius: 12px;
  border: 0.5px solid ${(props) => props.theme.colors["gray-200"]};
  background: #fff;
  padding: 0 32px 0 16px;
  font-size: 12px;
  font-weight: 400;
  color: ${(props) => props.theme.colors["blue-300"]};

  /* letter-spacing: 1; */

  &[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0 30px #fff inset !important;
    -webkit-text-fill-color: ${(props) =>
      props.theme.colors["blue-300"]} !important;
  }

  &[data-error="true"] {
    border-color: ${(props) => props.theme.colors.red};

    & + label {
      color: ${(props) => props.theme.colors.red};
    }
  }

  &:focus:not([data-error="true"]) {
    border-color: ${(props) => props.theme.colors["blue-100"]};

    & + label {
      color: ${(props) => props.theme.colors["blue-100"]};
    }
  }

  &:disabled {
    background-color: ${darken(0.04, "#fff")};
    border: 1px solid ${(props) => props.theme.colors["gray-200"]};
    color: ${(props) => props.theme.colors["gray-200"]};
    cursor: not-allowed;

    + label {
      background: linear-gradient(
        to top,
        ${darken(0.04, "#fff")} 50%,
        transparent 50%
      );
    }
  }

  ${(props) =>
    props.iconleft &&
    css`
      padding: 0 32px;

      & + label {
        left: 32px;
      }
    `}
`;

export const MyLabel = styled.label`
  transition: all 0.2s ease-in-out;
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;
  padding: 0 4px;
  pointer-events: none;

  color: rgba(0, 0, 0, 0.56);
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;

  background: linear-gradient(to top, #fff 50%, transparent 50%);

  #asterisk {
    color: ${(props) => props.theme.colors.red};
  }
`;
