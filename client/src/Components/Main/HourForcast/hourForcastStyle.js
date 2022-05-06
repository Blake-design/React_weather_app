import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexFlow: "row nowrap",
    justifyContent: "flex-start",
    alignItems: "center",
    maxWidth: "100%",
    marginTop: "1rem",
    marginBottom: "1rem",
    padding: "1rem",
    overflow: "auto",
    backgroundColor: theme.palette.hour,
    color: theme.palette.text.primary,
    border: "2px solid #f2f2f1 ",
    "&::-webkit-scrollbar": {
      width: "100%",
    },
    "&::-webkit-scrollbar-track": {
      backgroundColor: "#f2f2f1",
    },

    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "#16a7cd",
    },
    "&::-webkit-scrollbar-thumb:hover": {
      background: "#4ccbec",
      cursor: "grab",
    },

    "&::-webkit-scrollbar-thumb:active": {
      background: "#f29881",
      cursor: "grabbing",
    },
  },
  time: {
    display: "flex",
    justifyContent: "center",
  },
}));
