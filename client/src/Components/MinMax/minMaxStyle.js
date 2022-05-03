import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  box: {
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    gap: "1rem",
  },
  cold: {
    color: "#16a7cd",
  },
  hot: {
    color: "#ec1d4c",
  },
}));
