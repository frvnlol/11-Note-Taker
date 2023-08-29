const router = require("express").Router();
const { v4: uuidv4 } = require("uuid");
const db = require("../db/db.json");
const {
  createNewNote,
  findById,
  editNote,
  removeNote,
  readFromFile,
} = require("../lib/notes");
const fakeNote = { a: "hi", b: "loser" };

router.get("/notes", async (req, res) => {
  const notes = await readFromFile("./db/db.json");
  const parsedNotes = JSON.parse(notes);
  // readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
  return res.json(parsedNotes);
});

router.post("/notes", async (req, res) => {
  const { title, text } = req.body;

  if ((title, text)) {
    const notes = await readFromFile("./db/db.json");
    const parsedNotes = JSON.parse(notes);

    const newNote = {
      title,
      text,
      id: uuidv4(),
    };

    //add new note to notes array
  parsedNotes.push(newNote);
  console.log(parsedNotes)
   createNewNote(newNote,parsedNotes);
  }
  const finNotes = await readFromFile("./db/db.json");
    return res.json(finNotes)  

});

router.delete("/notes/:id", (req, res) => {
  const note = findById(req.params.id, notes);

  removeNote(note, notes);
  res.json();
});

module.exports = router;
