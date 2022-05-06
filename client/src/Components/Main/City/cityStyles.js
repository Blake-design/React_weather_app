import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  root: {
    justifyContent: "flex-start",
    alignItems: "flex-start",
    flexFlow: "row",
    maxWidth: "100%",
    marginTop: "1rem",
    marginLeft: "1rem",
    marginRight: "1rem",
    backgroundColor: theme.palette.overlay,
    color: theme.palette.text.primary,
    padding: ".5rem",
    borderRadius: "10px",
    [theme.breakpoints.only("xs")]: {
      margin: 0,
      borderRadius: "0px",
    },
  },
  city: {
    display: "flex",
    flexFlow: "row nowrap",
    justifyContent: "flex-start",
    alignItems: "center",
    maxWidth: "100%",
    gap: "2rem",
  },
  frost: {
    color: "#16a7cd",
  },
  cool: {
    color: "#4cbdbd",
  },
  warm: {
    color: "#ec6d4c",
  },
  hot: {
    color: "#ec1d4c",
  },
  minMaxBox: {
    display: "flex",
    flexFlow: "row nowrap",
    justifyContent: "flex-start",
    alignItems: "center",
    maxWidth: "100%",
    gap: "2rem",
  },
}));
