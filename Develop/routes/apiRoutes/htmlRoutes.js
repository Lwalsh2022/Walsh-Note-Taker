// is this supposed to be cost notesRoutes = require('express').Router(); ?

const router = require('express').Router();
const { createNewNote, deleteNote } = require('../../lib/notes');
let { notesArray } = require('../../db/notes');

// notes are available at /api/notes in JSON format
app.get('/notes', (req, res) => {
    let results = notesArray;
    res.json(results);
    });

    app.post('/notes', (req, res) => {
        // set id based on what the next index of the array will be
        if(notesArray) {
            req.body.id = notesArray.length.toString();
            } else {
                req.body.id = '0'}
                res.json(createNewNote(req.body, notesArray));  
            });
                
module.exports = router;