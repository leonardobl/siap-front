import styled from "styled-components";

export const Form = styled.form`
  width: 270px;

  @media (min-width: ${(props) => props.theme.screens.xl}) {
    width: 400px;
  }
`;

export const WrapperText = styled.div`
  display: flex;
  align-items: center;
  gap: 0 16px;
  margin-bottom: 36px;

  &::before {
    content: "";
    display: block;
    width: 1px;
    height: 55px;
    background-color: ${(props) => props.theme.colors["blue-100"]};
  }

  > p {
    color: ${(props) => props.theme.colors["blue-300"]};
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px; /* 142.857% */

    span {
      font-weight: 700;
    }
  }
`;

export const Title = styled.h1`
  color: ${(props) => props.theme.colors["blue-300"]};
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 32px; /* 100% */
  margin-bottom: 16px;
`;

export const Info = styled.p`
  color: ${(props) => props.theme.colors["blue-300"]};
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 16px; /* 114.286% */
  margin-bottom: 32px;

  span {
    font-weight: 700;
    display: block;
  }
`;

export const Grid = styled.div`
  display: grid;
  gap: 32px 0;
  grid-template-columns: 1fr;

  a#forgot {
    color: ${(props) => props.theme.colors["blue-100"]};
    text-align: center;
    display: block;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    width: 100%;
    line-height: 18px; /* 150% */
  }
`;

export const WrapperButtons = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px 0;
`;

export const ButtonEnter = styled.button`
  border-radius: 12px;
  border: none;
  outline: none;
  background: ${(props) => props.theme.colors["blue-100"]};
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  display: flex;
  width: 100%;
  height: 40px;
  padding: 8px 6px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;

  color: #fff;
  text-align: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
`;

export const ButtonRegister = styled.button`
  display: flex;
  width: 100%;
  height: 40px;
  padding: 8px 6px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  border-radius: 12px;
  background: ${(props) => props.theme.colors["blue-300"]};
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  border: none;
  outline: none;

  color: #fff;
  text-align: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 142.857% */
`;

export const ContentModal = styled.div`
  width: 300px;
  padding: 10px;
  background: ${(props) => props.theme.colors["blue-100"]};
  /* height: 140px; */

  > img {
    margin-left: auto;
    display: block;
    margin-bottom: 16px;
    cursor: pointer;
  }

  > p {
    color: #fff;
    text-align: center;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 12px; /* 75% */
    margin-bottom: 24px;

    span {
      font-weight: 700;
    }
  }

  > div {
    display: flex;
    justify-content: center;
    gap: 0 22px;
    margin-bottom: 16px;
  }
`;
