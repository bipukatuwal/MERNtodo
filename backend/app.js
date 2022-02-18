const express = require("express");
const mongoose = require("mongoose");
const connectDB = require("../backend/db");

const app = express();
const cors = require("cors");
const Note = require("./models/note");

app.use(express.json());
app.use(cors());

app.use("/note", require("./routes/noteroutes"));

app.get("/", (req, res) => {
  res.send("Hello from express server");
});

app.put("/update", async (req, res) => {
  console.log(req.body);
  const { id, addnote } = req.body;
  Note.findByIdAndUpdate(id, req.body)
    .then((updated) => {
      console.log(updated);
      res.json("ok");
    })
    .catch((err) => res.json(err));
  // try {
  //   // await Note.findById(id, (updatedNote) => {
  //   //   updatedNote.addnote = req.body.addnote;
  //   //   updatedNote.save();
  //   //   res.send("update");
  //   // });
  //   await Note.findByIdAndUpdate(id, newListName, function (err, updated) {
  //     if (err) return res.status(500).send(err);
  //     console.log(updated);
  //     res.status(200).send("ok");
  //   });
  // } catch (err) {
  //   console.log(err);
  // }
});

app.delete("/delete/:id", async (req, res) => {
  const id = req.params.id;
  await Note.findByIdAndDelete(id).exec();
  res.send("deleted");
});

app.listen(8000, () => {
  console.log("Server listening to port at 8000...");
});
