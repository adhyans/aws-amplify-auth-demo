import styled from "styled-components";

export const ButtonWrapper = styled.div`
  text-align: center;

  button {
    cursor: pointer;
    font-weight: 500;
    border-radius: 0.8rem;
    border: none;
    color: white;
    background-color: ${(props) => props.theme.primary};
    font-size: 1.6rem;
    width: ${({ width }) => (width ? width : 0)};
    height: ${({ height }) => (height ? height : 0)};
  }
`;
