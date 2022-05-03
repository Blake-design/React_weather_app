import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "space-around",
    alignItems: "center",
  },
  card: {
    margin: ".5rem",
    width: 120,
    backgroundColor: theme.palette.background,
    color: theme.palette.text.primary,
  },
  title: {
    textAlign: "start",
    marginTop: "2rem",
  },
}));
