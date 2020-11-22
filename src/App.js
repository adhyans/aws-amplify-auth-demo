import React from "react";
import { Router } from "@reach/router";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import Login from "./Login";
import Join from "./Join";

const GlobalStyle = createGlobalStyle`
  :root {
    --primary: #005C96;
    --background: #F6F8FF;
    --textColor: #000000;
    --footerColor: #222222;
  }

  html {
    font-size: 62.5%;
  }

  body, button, p, h1, h2, h3, h4, h5, h6 {
    font-family: Poppins, sans-serif;
    margin: 0;
    padding: 0;
  }

  input {
    font-family: Poppins, sans-serif;
  }

  * {
    box-sizing: border-box;
  }
`;

const theme = {
  primary: "#005C96",
  background: "#F6F8FF",
  textColor: "#000000",
  footerColor: "#222222"
};

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <Join path="/" />
        <Login path="/login" />
      </Router>
    </ThemeProvider>
  );
}
