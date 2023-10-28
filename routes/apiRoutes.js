const router = require('express').Router();

const { saveNote, deleteNote } = require('../../lib/notes');
let notes = require('../../db/db.json');

// API routes
// GET request
router.get('/notes', (req, res) => {
    res.json(notes);
});
