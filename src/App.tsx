import React from "react";
import { createGlobalStyle } from "styled-components";
import Switch from "./Components/Pages/Switch/Switch";
import colors from "./Style/colors";

export const GlobalStyles = createGlobalStyle`
  body {
    font-family: 'Roboto', sans-serif;
    background-color: ${colors.background1};
    margin: 0;
  }
`;
   
function App() {
  return (
    <>
      <GlobalStyles />
      <Switch />
    </>
  );
}

export default App;
