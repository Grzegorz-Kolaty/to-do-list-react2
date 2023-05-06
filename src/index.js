import React from "react";
import { createRoot } from 'react-dom/client';
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ThemeProvider, createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
html {
  box-sizing: border-box;
}

*,
::after,
::before {
  box-sizing: inherit;
}

body {
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
  background: ${({ theme }) => theme.background.color};
}
`;

export const theme = {
  font: {
    colorBlack: "black",
    colorWhite: "white",
    colorDisabled: "grey",
    button: "white",
    sizeLarge: "large",
    sizeNormal: "medium"
  },

  background: {
    color: "#eee",
    colorWhite: "white",
    colorTeal: "teal",
    colorGreen: "green",
    colorTealBrighter: "hsl(180, 100%, 30%)",
    transparent: "transparent"
  },

  spacingBoxes: {
    padding: "20px",
    margin: "0px"
  },

  spacingElements: {
    padding: "10px",
    margin: "0px"
  },

  border: {
    outline: "none",
    border: "none"
  },

  transition: "300ms"
}

const container = document.getElementById("root")
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

reportWebVitals();
