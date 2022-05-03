import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  content: {
    width: "auto",
    height: "600px",
    backgroundRepeat: "no-repeat",
    backgroundOrigin: "border-box",
    backgroundSize: "cover",
    objectFit: "contain",
  },
  title: {
    textAlign: "start",
    marginTop: "2rem",
  },
}));
