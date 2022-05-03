import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "flex-end",
    backgroundColor: theme.palette.overlay,
    color: theme.palette.text.primary,
  },
}));
