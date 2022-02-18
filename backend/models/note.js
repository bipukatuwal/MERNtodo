const mongoose = require("mongoose");
const { Schema } = mongoose;
const noteSchema = new mongoose.Schema({
  addnote: {
    type: String,
    required: true,
  },
});

const Note = mongoose.model("Note", noteSchema);

module.exports = Note;
