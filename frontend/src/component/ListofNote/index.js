import React, { useEffect, useState } from "react";
import MaterialTable from "material-table";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import axios from "axios";
import DeleteDialog from "../DeleteDialog";
import { useStyles } from "./style";
import { Paper } from "@material-ui/core";

const ListNote = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [deleteid, setDeleteid] = useState(undefined);

  const [listofnote, setlistofNote] = useState([
    {
      addnote: "",
    },
  ]);

  const getNote = () => {
    axios("/note/listofnote")
      .then((res) => {
        setlistofNote(res.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getNote();
  }, []);
  console.log("list of note", listofnote);

  const updateNote = (note) => {
    console.log("running update");
    console.log(note);
    axios.put(`http://localhost:8000/update`, {
      id: note._id,
      addnote: note.addnote,
    });
  };

  const deleteNote = () => {
    console.log("deleteId ", deleteid);
    axios.delete(`http://localhost:8000/delete/${deleteid}`);
    setOpen(false); //closes dialog after deleting a row
    getNote();
  };

  return (
    <>
      <div style={{ maxWidth: "100%" }}>
        <MaterialTable
          components={{
            Container: (props) => <Paper className={classes.root} {...props} />,
          }}
          editable={{
            onRowUpdate: (newData, oldData) =>
              new Promise((resolve, reject) => {
                setTimeout(() => {
                  const updateNoteData = [...listofnote];
                  const index = oldData.tableData.id;
                  updateNoteData[index] = newData;
                  setlistofNote([...updateNoteData]);
                  console.log("inside edit");
                  console.log(updateNoteData[index]);
                  updateNote(updateNoteData[index]);

                  resolve();
                }, 1000);
              }),
          }}
          columns={[
            { title: "Id", field: "_id", align: "center" },
            { title: "Notes", field: "addnote", align: "left" },
          ]}
          data={listofnote}
          actions={[
            {
              icon: DeleteForeverIcon,
              tooltip: "Delete Note",
              onClick: (event, rowData) => {
                console.log(rowData);
                setOpen(true); //open confirmation dialog
                setDeleteid(rowData._id); //deletes row id
                /*  deleteNote(rowData._id); */
              },
            },
          ]}
          title="List of Note"
          options={{
            rowStyle: {
              backgroundColor: "#EEE",
            },
          }}
        />
        <DeleteDialog open={open} setOpen={setOpen} handleDelete={deleteNote} />
      </div>
    </>
  );
};

export default ListNote;
