import styled from "styled-components";

export const Label = styled.label`
  position: relative;

  > img#icon-eye {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 16px;
    cursor: pointer;
  }

  > img#icon-left {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 16px;
  }
`;

export const Input = styled.input`
  height: 36px;
  border-radius: 12px;
  outline: none;
  border: 1px solid ${(props) => props.theme.colors["gray-200"]};

  width: 100%;
  height: 36px;
  border-radius: 12px;
  /* border: 0.5px solid ${(props) => props.theme.colors["gray-200"]}; */
  border: none;
  background: #fff;
  padding: 0 30px 0 16px;
  font-size: 14px;
  font-weight: 400;
  color: ${(props) => props.theme.colors["blue-100"]};

  letter-spacing: 1;

  &[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

  &[type="password"] {
    padding: 0 36px 0 16px;
  }

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0 30px #fff inset !important;
    -webkit-text-fill-color: #111 !important;
  }

  &[data-error="true"] {
    border: 0.5px solid ${(props) => props.theme.colors.red};
  }

  &[data-icon-left="true"] {
    padding: 0 36px;
  }
`;