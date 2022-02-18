import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },

  inputField: {
    borderRadius: "18px",
    width: "50%",
    margin: theme.spacing(1, 0),
    fontFamily: "Helvetica",
    fontStyle: "normal",
    fontWeight: "bold",
    background: "white",
    border: "2px solid black",
  },

  input: {
    color: "black",
    textAlign: "center",
    fontFamily: "cursive",
  },

  btnSubmit: {
    width: "49%",
    borderRadius: "12px",
    fontWeight: "bold",
  },
  card: {
    background: "linear-gradient(351deg, #aba9c1, #77626200)",
  },
  header: {
    fontFamily: "inherit",
  },
}));
