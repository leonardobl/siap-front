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

  span.rs__header:has(.MuiTypography-body1) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    background: #0b4a89;

    > div {
      display: flex;
      flex-direction: column;
      align-items: center;
      /* gap: 8px; */
    }

    p.MuiTypography-body1 {
      color: rgb(0, 0, 0);
      cursor: default;
      color: #fff;
      font-size: 12px !important;
      font-style: normal;
      font-weight: 400;
    }

    p.MuiTypography-body1:hover {
      text-decoration: none;
      color: #fff;
      font-size: 12px;
      font-style: normal;
      font-weight: 400;
    }

    @media (min-width: ${(props) => props.theme.screens.lg}) {
      p.MuiTypography-body1 {
        font-size: 16px !important;
      }

      p.MuiTypography-body1:hover {
        font-size: 16px;
      }

      > div {
        display: flex;
        flex-direction: row-reverse;
        align-items: center;
        gap: 8px;
      }
    }
  }
`;
