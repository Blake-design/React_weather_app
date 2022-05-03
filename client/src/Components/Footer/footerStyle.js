import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: "center",
    padding: "1rem",
  },
  link: {
    color: theme.palette.text.link,
  },
}));
