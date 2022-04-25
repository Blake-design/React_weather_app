import React from "react";
import { MuiThemeProvider } from "@material-ui/core";
import { Home } from "./Components/";
import { theme } from "./themes/theme";

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <Home />
    </MuiThemeProvider>
  );
}

export default App;
