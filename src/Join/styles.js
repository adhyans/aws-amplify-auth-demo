import styled from "styled-components";

export const JoinWrapper = styled.div`
  background-color: ${(props) => props.theme.background};
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;

  .title {
    font-weight: bold;
    font-size: 4.4rem;
    padding-top: 2%;
  }

  .form {
    margin-top: 5rem;
    width: 40rem;
    height: 45rem;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    background-color: white;
    border-radius: 0.5rem;

    .input-group {
      margin: 3.6rem 2.9rem 0rem 2.9rem;

      .input-with-label {
        margin-top: 4.6rem;
      }
    }
  }

  .get-started-button {
    margin-top: 4.6rem;
  }

  .signin-text {
    text-align: center;
    font-size: 1.4rem;
    margin-top: 1.6rem;
    cursor: pointer;

    .signin {
      text-decoration: underline;
      color: ${(props) => props.theme.primary};
    }
  }
`;
