import styled from "styled-components";

export const MyFormLogin = styled.form`
  padding: 50px 22px;
  background-color: rgba(73, 233, 255, 0.5);
  border-radius: 20px;

  > img {
    display: block;
    margin: 0 auto;
    margin-bottom: 48px;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-areas: "login" "senha";
  gap: 24px 0;

  &:nth-child(1) {
    grid-area: "login";
  }

  &:nth-child(2) {
    grid-area: "senha";
  }
`;
