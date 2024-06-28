import styled from "styled-components";

export const Container = styled.div`
  width: fit-content;
  margin: 0 auto;
`;

export const WrapperForm = styled.div`
  border-radius: 0.75rem;
  border: ${(props) => props.theme.colors["gray-200"]};
  background: #fff;
  padding: 2rem 1rem;

  h1 {
    color: ${(props) => props.theme.colors["blue-300"]};
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 600;
    line-height: 2rem;
    margin-bottom: 1.5rem;
  }

  @media (min-width: ${(props) => props.theme.screens.lg}) {
    padding: 2rem;
  }
`;
