import React from "react";
import { ThemeProvider } from "@material-ui/core";
import { Home } from "./Components/";
import { lightTheme, darkTheme } from "./themes/theme.js";
import CssBaseline from "@mui/material/CssBaseline";
import { GetThemeContext } from "./Hooks";

function App() {
  const darkMode = GetThemeContext();

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <Home />
    </ThemeProvider>
  );
}

export default App;
