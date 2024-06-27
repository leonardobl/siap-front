import styled from "styled-components";

export const Form = styled.form`
  border-radius: 0.75rem;
  background: #fff;
  box-shadow: 3px 2px 3px 0px rgba(0, 0, 0, 0.16);
  padding: 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: "title title" "pix boleto" "msg msg" "button button";
  gap: 2rem 1rem;
  place-items: center;
  max-width: 30rem;
  width: 100%;
  margin: 0 auto;

  h3 {
    color: #0b4a89;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 2rem;
    text-align: center;

    span {
      font-weight: 600;
    }
  }

  > div {
    width: fit-content;
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  > :nth-child(1) {
    grid-area: title;
  }

  > :nth-child(2) {
    grid-area: pix;
  }

  > :nth-child(3) {
    grid-area: boleto;
  }

  > :nth-child(4) {
    grid-area: msg;
  }

  > :nth-child(5) {
    grid-area: button;
  }
`;

export const Label = styled.span`
  color: #9d9d9d;
  font-size: 0.625rem;
  font-style: normal;
  font-weight: 400;
  line-height: 0.75rem;
  margin-top: 1rem;
  display: block;
  text-align: center;
  max-width: 5.68rem;

  > span {
    font-weight: 600;
  }

  @media (min-width: ${(props) => props.theme.screens.lg}) {
    margin-top: 0.5rem;
  }
`;
