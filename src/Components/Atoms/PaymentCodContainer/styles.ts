import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  max-width: 25.125rem;
  width: 100%;
  display: block;
  margin: 0 auto;

  img {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 10px;
    cursor: pointer;
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 2.25rem;

  border-radius: 0.75rem;
  border: 0.3px solid #9d9d9d;
  background: #fff;
  padding: 0 40px 0 16px;
  display: flex;

  color: #9d9d9d;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1rem;

  &:focus {
    outline: none;
  }

  @media (max-width: 500px) {
    max-width: 400px;
    width: 100%;
    font-size: 16px;
  }
`;
