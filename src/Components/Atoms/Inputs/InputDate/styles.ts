import styled, { css } from "styled-components";

export const Container = styled.div<{ $showIcon?: boolean }>`
  ${({ $showIcon }) => css`
    position: relative;

    &:has(input:focus),
    &:has(input:not(:placeholder-shown)) {
      label {
        top: -2px;
      }
    }

    &:not([data-error="true"]):has(input:focus) {
      .react-datepicker__input-container input {
        border-color: ${(props) => props.theme.colors["blue-100"]};
      }

      label {
        color: ${(props) => props.theme.colors["blue-100"]};
      }
    }

    &[data-error="true"] {
      .react-datepicker__input-container input {
        border: 1px solid red;
      }

      label {
        color: red;
      }
    }

    .react-datepicker-popper {
      z-index: 2;
    }

    .react-datepicker__navigation_wrapper {
      display: grid;
      grid-template-columns: 0.2fr 1fr 0.3fr;
      align-items: center;
      justify-content: center;

      button {
        position: relative;
      }
    }

    .react-datepicker-wrapper {
      min-width: 100%;
      position: relative;

      svg {
        right: 0;
        top: 50%;
        transform: translateY(-50%);
      }
    }

    .react-datepicker-wrapper::before {
      position: absolute;
      z-index: 1;
      right: 30px;
      top: 50%;
      transform: translateY(-50%);
      content: "";
      display: block;
      border-left: 1px solid rgb(204, 204, 204);
      display: block;
      height: 50%;
    }

    .react-datepicker {
      min-width: max-content;
    }

    .react-datepicker__close-icon {
      &::after {
        background-color: transparent;
        color: ${(props) => props.theme.colors["gray-300"]};
        font-size: 16px;
        position: absolute;
        /* font-weight: 600; */
        right: ${$showIcon ? "46px" : "10px"};
        /* bottom: 20px; */
        top: 50%;
        transform: translateY(-50%);
      }
    }

    .react-datepicker__input-container {
      input {
        width: 100%;

        height: 36px;
        border-radius: 12px;
        border: 1px solid ${(props) => props.theme.colors["gray-200"]};
        background: #fff;

        padding: 0 16px;
        color: ${(props) => props.theme.colors["blue-300"]};
        font-size: 12px;
        font-weight: 400;
        outline: none;
        /* letter-spacing: 1px; */

        /* &:focus {
          border: 1px solid ${(props) => props.theme.colors["blue-100"]};
          outline: none;
        } */

        &:disabled {
          cursor: not-allowed;
        }
      }

      /* .data-error {
        border: 1px solid red;
      } */
    }

    input:-webkit-autofill,
    input:-webkit-autofill:hover,
    input:-webkit-autofill:focus,
    input:-webkit-autofill:active {
      -webkit-box-shadow: 0 0 0 30px #fff inset !important;
      -webkit-text-fill-color: #111 !important;
    }
  `}
`;

export const Required = styled.span<{ $isRequired: boolean }>`
  color: rgba(237, 0, 0, 1);
  display: ${({ $isRequired }) => ($isRequired ? "block" : "none")};
`;

export const Label = styled.label`
  position: absolute;
  z-index: 1;
  top: 50%;
  left: 12px;
  transform: translateY(-50%);
  background: linear-gradient(to top, #fff 50%, transparent 50%);
  display: flex;
  pointer-events: none;

  padding: 0 4px;
  color: rgba(0, 0, 0, 0.56);

  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
  transition: all 0.2s ease-in-out;

  /* &.data-error {
    color: red;
  } */
`;

export const ImgLoad = styled.img`
  position: absolute;
  z-index: 1;
  top: 50%;
  bottom: 50%;
  transform: translateY(-50%);
  margin: 0 auto;
  display: block;
  right: 50%;
`;
