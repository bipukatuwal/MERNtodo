import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@material-ui/core";
import React from "react";
import useSWR from "swr";
import { useStyles } from "./style";

const fetcher = (...args) => fetch(...args).then((res) => res.json());
const SwrList = () => {
  const classes = useStyles();

  const { data, error } = useSWR("/note/listofnote", fetcher);

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  return (
    <>
      <div>
        <List className={classes.root}>
          <h2> List fetched from useSWR </h2>
          {data.map((note) => (
            <ListItem key={note._id}>
              <ListItemIcon>{note.addnote}</ListItemIcon>
            </ListItem>
          ))}
        </List>
      </div>
    </>
  );
};

export default SwrList;
