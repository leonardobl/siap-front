import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px 16px;
  padding: 32px 22px;
  width: 100%;
  max-width: 553px;
  margin-bottom: 32px;

  border-radius: 12px;
  background: #fff;
  box-shadow: 3px 2px 3px 0px rgba(0, 0, 0, 0.16);

  > div:nth-child(2) {
    display: flex;
    justify-content: end;
    gap: 0 16px;
  }
`;
