import { makeStyles } from "@material-ui/core/";

export const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.paper,
    color: theme.palette.text.primary,
    cursor: "pointer",
    "&:hover >*": {
      color: theme.palette.text.secondary,
    },
  },
}));
