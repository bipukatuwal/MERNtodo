import { Card, CardContent, Grid, Button } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useStyles } from "./style";

toast.configure();

const TakeNote = () => {
  const classes = useStyles();

  const [data, setData] = useState({});

  const url = "http://localhost:8000/note/create";

  const handle = (e) => {
    console.log("data", e.target.value);
    const newdata = { ...data };
    newdata[e.target.id] = e.target.value;
    setData(newdata);
  };

  const handleClick = (e) => {
    toast.success("Note added successfully", {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 2000,
      style: { background: "green", color: "white" },
    });
    e.preventDefault();
    console.log("Note added");
    axios.post(url, {
      addnote: data.addnote,
    });
  };

  return (
    <>
      <Card className={classes.root}>
        <CardContent>
          <Grid container spacing={1}>
            <Grid xs={12} item>
              <TextField
                onChange={(e) => handle(e)}
                id="addnote"
                value={data.addnote}
                className={classes.textField}
                label="Take a note"
                placeholder="Add note here"
              ></TextField>
            </Grid>
            <Grid xs={12} item>
              <Button
                className={classes.btnSubmit}
                onClick={handleClick}
                variant="contained"
                color="primary"
              >
                Add
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </>
  );
};

export default TakeNote;
