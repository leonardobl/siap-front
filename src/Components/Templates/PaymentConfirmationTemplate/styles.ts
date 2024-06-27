import styled from "styled-components";

export const Container = styled.div`
  margin: 0 auto;
  border-radius: 0.75rem;
  background: #fff;
  padding: 2rem 0;
  box-shadow: 3px 2px 3px 0px rgba(0, 0, 0, 0.16);
  max-width: 21rem;
  width: 100%;

  h4 {
    color: #0b4a89;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 2rem;
    display: flex;
    align-items: center;
    gap: 1rem;
    justify-content: center;
    margin-bottom: 1.5rem;

    > img {
      width: 1.375rem;
      display: block;
    }
  }

  > button {
    margin: 0 auto;
  }
`;
