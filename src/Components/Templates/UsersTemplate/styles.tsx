import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 890px;
  margin: 0 auto;
`;

export const WrapperButtons = styled.div`
  display: flex;
  gap: 0 16px;
  margin-bottom: 24px;

  @media (min-width: ${(props) => props.theme.screens.lg}) {
    gap: 0 20px;
    margin-bottom: 32px;
  }
`;

export const ContentModal = styled.div`
  width: 100%;
  max-width: 360px;

  h2 {
    color: ${(props) => props.theme.colors["blue-300"]};
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 20px;
    margin-bottom: 24px;
  }

  @media (min-width: ${(props) => props.theme.screens.lg}) {
    max-width: 680px;

    h2 {
      font-size: 20px;
    }
  }
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: end;

  > img {
    display: block;
    cursor: pointer;
  }
`;

export const FormModal = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px 16px;
  min-width: 320px;

  > div:nth-child(6) {
    display: flex;
    gap: 0 16px;
    justify-content: end;
  }

  @media (min-width: ${(props) => props.theme.screens.lg}) {
    min-width: 680px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-areas: "nome nome" "cpf telefone" "email perfil" ". button";

    > :nth-child(1) {
      grid-area: nome;
    }
    > :nth-child(2) {
      grid-area: cpf;
    }
    > :nth-child(3) {
      grid-area: telefone;
    }
    > :nth-child(4) {
      grid-area: email;
    }
    > :nth-child(5) {
      grid-area: perfil;
    }
    > :nth-child(6) {
      grid-area: button;
    }
  }
`;
