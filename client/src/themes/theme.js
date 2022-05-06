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
    sidebar: "#d8dfe4",
    paper: "#ffffff",
    overlay: "rgba(255, 255, 255, .85)",
    hour: "#96d2f6",
    week: "#b9e3fd",
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
    sidebar: "#636d75",
    paper: "#424242",
    overlay: "rgba(66, 66, 66, 0.85)",
    hour: "#0a1b45",
    week: "#3b425d",
    text: {
      link: "#d8c353",
    },
  },
});

export { darkTheme, lightTheme };
