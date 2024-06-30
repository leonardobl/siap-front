import styled from "styled-components";

export const Container = styled.div`
  button.MuiButton-root {
    color: #0b4a89;
  }

  button.MuiButton-root:hover {
    background-color: transparent;
  }

  div.rs__view_navigator {
    display: none;
  }

  span.rs__cell.rs__header:has(.MuiTypography-body1) {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #0b4a89;

    > div {
      display: flex;
      flex-direction: row-reverse;
      align-items: center;
      gap: 8px;
    }

    p.MuiTypography-body1 {
      color: rgb(0, 0, 0);
      cursor: default;
      color: #fff;
      font-size: 16px !important;
      font-style: normal;
      font-weight: 400;
      line-height: 20px;
    }

    p.MuiTypography-body1:hover {
      text-decoration: none;
      color: #fff;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 20px;
    }
  }
`;
