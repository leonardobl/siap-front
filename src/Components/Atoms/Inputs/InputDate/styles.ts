import styled, { css } from "styled-components";

export const Container = styled.div<{ $showIcon?: boolean }>`
  ${({ $showIcon }) => css`
    position: relative;

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
        right: 4px;
        top: 50%;
        transform: translateY(-50%);
      }
    }

    .react-datepicker-wrapper::before {
      position: absolute;
      z-index: 1;
      right: 40px;
      top: 50%;
      transform: translateY(-50%);
      content: url("/assets/svg/left-bar.svg");
      display: block;
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
        border: 0.5px solid ${(props) => props.theme.colors["gray-200"]};
        background: #fff;

        padding: 0 16px;
        color: ${(props) => props.theme.colors["gray-200"]};
        font-size: 14px;
        font-weight: 400;

        &:focus {
          /* outline: 1px solid #12d1a7; */
          outline: none;
        }

        &:disabled {
          cursor: not-allowed;
        }
      }

      .data-error {
        border: 1px solid red;
      }
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
  top: -9px;
  left: 12px;
  background: linear-gradient(to top, #fff 50%, transparent 50%);
  display: flex;

  padding: 0 4px;
  color: rgba(0, 0, 0, 0.56);

  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;

  &.data-error {
    color: red;
  }
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
