const express = require("express");
const router = express.Router();
const Note = require("../models/note");

router.route("/create").post((req, res) => {
  const addnote = req.body.addnote;
  const newNote = new Note({
    addnote,
  });
  newNote.save();
});

router.route("/listofnote").get(async (req, res) => {
  console.log("list of notes fetching");
  const data = await Note.find();
  if (data) res.status(200).json(data);
  else res.status(500).json("error");
});

router.delete(":/id", async (req, res) => {
  try {
    const note = await Note.findByIdAndDelete(req.params.id);
    res.send(note);
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;
