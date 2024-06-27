import styled from "styled-components";

export const Container = styled.div``;

export const Card = styled.div`
  border-radius: 0.75rem;
  background: #fff;
  box-shadow: 3px 2px 3px 0px rgba(0, 0, 0, 0.16);

  max-width: 46rem;
  width: 100%;
  margin: 0 auto 1.5rem;
  padding: 2rem;

  h2 {
    color: #0b4a89;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 2rem;
    /* text-align: center; */
    margin-bottom: 2rem;

    span {
      font-weight: 600;
    }
  }

  > :nth-child(2) {
    margin: 0 auto;
    width: fit-content;
    margin-bottom: 1rem;

    img {
      max-width: 14.375rem;
      width: 100%;
      display: block;
      border: 1px solid ${(props) => props.theme.colors["gray-200"]};
      border-radius: 0.5rem;
    }
  }

  > :nth-child(3) {
    margin: 0 auto;
    width: fit-content;
    margin-bottom: 2rem;

    p {
      color: #0b4a89;
      font-size: 1.25rem;
      font-style: normal;
      font-weight: 500;
      line-height: 2rem;

      span {
        font-weight: 600;
      }
    }
  }

  > :nth-child(4) {
    margin-bottom: 2rem;
  }

  > :nth-child(5) {
    button {
      margin: 0 auto;
    }
  }

  @media (min-wi: ${(props) => props.theme.screens.lg}) {
    margin: 0 auto 2rem;

    h2 {
      text-align: center;
    }
  }
`;

export const Info = styled.div`
  padding: 0.8rem;
  margin: 0 auto;
  border-radius: 0.25rem;
  background: #fff;
  box-shadow: 3px 2px 3px 0px rgba(0, 0, 0, 0.16);
  width: fit-content;

  p {
    color: #9d9d9d;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1rem;
    text-align: center;

    span {
      color: #ed0000;
    }
  }
`;
