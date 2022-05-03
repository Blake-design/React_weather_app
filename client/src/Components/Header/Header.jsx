import React, { useContext } from "react";
import { darkModeContext } from "../../themes/themeHandler";
import { Typography, Box, Container } from "@material-ui/core/";
import { MaterialUISwitch, useStyles } from "./headerStyle";

const Header = ({ title }) => {
  const classes = useStyles();
  const DarkModeContext = useContext(darkModeContext);
  const { darkMode, setDarkMode } = DarkModeContext;

  const handleThemeChange = () => {
    if (darkMode) {
      localStorage.setItem("preferred-theme", "light");
      setDarkMode(false);
    } else {
      localStorage.setItem("preferred-theme", "dark");
      setDarkMode(true);
    }
  };

  return (
    <Container>
      <Box className={classes.boxCenter}>
        <Typography variant="h2" component="h1">
          {title}
        </Typography>
      </Box>
      <Box className={classes.boxEnd}>
        <MaterialUISwitch
          sx={{ m: 1 }}
          checked={darkMode}
          onChange={handleThemeChange}
        />
      </Box>
    </Container>
  );
};

export default Header;
