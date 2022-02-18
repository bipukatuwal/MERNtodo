import axios from "axios";

const url = "http://localhost:8000/note/";

export function deleteNote(id) {
  return axios.delete(url + "/" + id);
}
