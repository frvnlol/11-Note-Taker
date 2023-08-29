const router = require('express').Router();
const { v4: uuidv4 } = require('uuid');

const { createNewNote, findById, editNote, removeNote } = require('../lib/notes');
const fakeNote = {a:'hi',b:'loser'};
router.get('/notes', (req, res) => {
    res.json(fakeNote);
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