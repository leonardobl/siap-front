import styled from "styled-components";

export const Form = styled.form`
  padding: 2rem 1.38rem;
  border-radius: 0.75rem;
  background: #fff;
  box-shadow: 3px 2px 3px 0px rgba(0, 0, 0, 0.16);
  width: 100%;
  max-width: 50rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 2rem 0;

  @media (min-width: ${(props) => props.theme.screens.lg}) {
    padding: 2rem;
    gap: 2rem 1rem;
    flex-direction: row;
    flex-wrap: wrap;

    > div {
      flex: 1 1 calc(50% - 16px);
    }
  }
`;

export const ButtonFile = styled.button`
  all: unset;
  border-radius: 0.75rem;
  background: #0b4a89;
  box-shadow: 1px 1px 1px 0px rgba(0, 0, 0, 0.25);
  padding: 0.44rem 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0 0.5rem;

  cursor: pointer;
  color: #fff;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.25rem;
`;

export const ContentModal = styled.div`
  h2 {
    color: ${(props) => props.theme.colors["blue-300"]};
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 600;
    line-height: 2rem;
    margin-bottom: 1.5rem;
  }

  div:first-child {
    margin-bottom: 2rem;
  }
`;

export const WrapperContentModal = styled.div`
  max-width: 35.5625rem;
  width: 100%;
`;

export const HeaderModal = styled.div`
  display: flex;
  justify-content: end;

  img {
    cursor: pointer;
  }
`;

export const WrapperButtonModal = styled.div`
  display: flex;
  justify-content: center;
  gap: 0 1rem;
`;

export const WrapperButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 0 1rem;

  @media (min-width: ${(props) => props.theme.screens.lg}) {
    justify-content: end;
  }
`;
