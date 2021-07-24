import React from "react";
import { Reset } from "styled-reset";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
// import MainPage from "./components/MainPage/MainPage";
import { GlobalStyles } from "./GlobalStyle";
import MainPage from "../src/components/MainPage/MainPage";

function App() {
  return (
    <>
      <Reset />
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <MainPage />
      </ThemeProvider>
    </>
  );
}

export default App;
