import { useContext, useEffect } from "react";

import { darkModeContext } from "./themeHandler";

const GetThemeContext = () => {
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
  return darkMode;
};

export default GetThemeContext;
