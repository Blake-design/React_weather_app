import React, { useContext, useEffect } from "react";
import { ThemeProvider } from "@material-ui/core";
import { Home } from "./Components/";
import { lightTheme, darkTheme } from "./themes/theme";
import CssBaseline from "@mui/material/CssBaseline";
import { darkModeContext } from "./themes/themeHandler";

function App() {
  const DarkModeContext = useContext(darkModeContext);
  const { darkMode, setDarkMode } = DarkModeContext;

  useEffect(() => {
    const theme = localStorage.getItem("preferred-theme");
    if (theme) {
      const themePreference = localStorage.getItem("preferred-theme");
      if (themePreference === "dark") {
        setDarkMode(true);
      } else {
        setDarkMode(false);
      }
    } else {
      localStorage.setItem("preferred-theme", "light");
      setDarkMode(false);
    }
  }, []);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <Home />
    </ThemeProvider>
  );
}

export default App;
