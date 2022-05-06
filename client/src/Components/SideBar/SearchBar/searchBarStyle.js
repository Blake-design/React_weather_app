import { makeStyles } from "@material-ui/core/";

export const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "80%",
      color: theme.palette.text.primary,
    },
  },
}));
