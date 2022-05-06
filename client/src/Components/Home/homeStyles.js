import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  root: {
    justifyContent: "center",
    backgroundColor: theme.palette.background,
    color: theme.palette.text.primary,
    width: "100vw",
    maxWidth: "100vw",
    xOverflow: "none",
  },
  paper: {
    padding: theme.spacing(3),
    textAlign: "center",
    backgroundColor: theme.palette.paper,
    color: theme.palette.text.primary,
  },
  sidebar: {
    padding: theme.spacing(3),
    textAlign: "center",
    backgroundColor: theme.palette.sidebar,
    color: theme.palette.text.primary,
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
}));
