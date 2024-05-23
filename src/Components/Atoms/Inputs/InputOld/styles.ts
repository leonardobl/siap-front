import styled, { css } from "styled-components";

// export const Container = styled.div`
//   ${({ theme: { colors } }) => css`
//     position: relative;

//     input:-webkit-autofill,
//     input:-webkit-autofill:hover,
//     input:-webkit-autofill:focus,
//     input:-webkit-autofill:active {
//       -webkit-box-shadow: 0 0 0 30px #fff inset !important;
//       -webkit-text-fill-color: #111 !important;
//     }

//     > img {
//       cursor: pointer;
//       position: absolute;
//       right: 14px;
//       top: 50%;
//       transform: translateY(-50%);
//       /* filter: brightness(0) saturate(100%) invert(39%) sepia(34%)
//         saturate(5624%) hue-rotate(353deg) brightness(95%) contrast(92%); */
//     }
//   `}
// `;

export const Label = styled.label`
  position: relative;

  > p {
    position: absolute;
    z-index: 1;
    top: 50%;
    left: 16px;
    transform: translateY(-50%);
    background: linear-gradient(to top, #fff 50%, transparent 50%);
    display: flex;
    padding: 2px 5px;
    transition: all 0.15s ease-in-out;

    color: rgba(0, 0, 0, 0.56);
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px;

    > span {
      color: ${(props) => props.theme.colors.red};
      display: block;
    }
  }

  > img {
    cursor: pointer;
    position: absolute;
    right: 14px;
    top: 50%;
    transform: translateY(-50%);
    /* filter: brightness(0) saturate(100%) invert(39%) sepia(34%)
       saturate(5624%) hue-rotate(353deg) brightness(95%) contrast(92%); */
  }

  &:has(> input:not(:placeholder-shown)) {
    top {
      top: -12px;
    }
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 36px;
  border-radius: 0.25rem;
  border: 0.5px solid ${(props) => props.theme.colors["gray-200"]};
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
    padding: 0 40px 0 16px;
  }

  &:focus {
    border: 0.5px solid ${(props) => props.theme.colors["blue-100"]};
    outline: none;
  }

  /* &::selection {
      background-color: #12d1a7;
      color: #fff;
    } */

  &:read-only {
    border: 1px solid #adb7b5;
  }

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0 30px #fff inset !important;
    -webkit-text-fill-color: #111 !important;
  }
`;
