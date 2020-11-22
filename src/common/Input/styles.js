import styled from "styled-components";

export const InputWrapper = styled.div`
  width: 100%;

  input {
    height: ${({ height }) => (height ? height : "4.7rem")};
    border-radius: 0.4rem;
    border: none;
    border: solid 1px #000;
    padding: 1rem;
    font-size: ${({ size }) => (size ? size : "2.4rem")};
    width: 100%;
  }
`;
