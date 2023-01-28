import React from "react";
import { ThemeProvider } from "styled-components";
import Home from "@axao/pages/Home/Home";
import Theme from "./theme/Theme";

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <Home />
    </ThemeProvider>
  );
}

export default App;
