import { createTheme } from "@mui/material/styles";

const baseTheme = createTheme({
  typography: {
    fontSize: 14,
    button: {
      textTransform: "none",
      letterSpacing: 0,
      fontWeight: "bold",
    },
  },
});

const lightTheme = createTheme({
  ...baseTheme,

  palette: {
    mode: "light",

    paper: "#ffffff",
    overlay: "rgba(255, 255, 255, .85)",
    sky: "#9adafc",

    background: "#effafc",
    text: {
      link: "blue",
    },
  },
});

const darkTheme = createTheme({
  ...baseTheme,
  palette: {
    mode: "dark",

    background: "#001324",

    paper: "#424242",
    overlay: "rgba(66, 66, 66, 0.85)",
    sky: "#0a1b45",

    text: {
      link: "#d8c353",
    },
  },
});

export { darkTheme, lightTheme };
