const router = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const db = require('../db/db.json');
const { createNewNote, findById, editNote, removeNote, readFromFile } = require('../lib/notes');
const fakeNote = {a:'hi',b:'loser'};

router.get('/notes', async (req, res) => {
    const notes = await readFromFile("./db/db.json");
    const parsedNotes = JSON.parse(notes)
    // readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
    return res.json(parsedNotes);
});

router.post('/notes', (req, res) => {

    if (!req.body.id) {
        req.body.id = uuidv4();
        createNewNote(req.body, notes);
    } else {
        editNote(req.body, notes);
    }

    res.json(req.body);
});

router.delete('/notes/:id', (req, res) => {
    const note = findById(req.params.id, notes);

    removeNote(note, notes);
    res.json();
});

module.exports = router;