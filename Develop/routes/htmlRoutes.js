const path = require('path');
const router = require('express').Router();

//All other routes respond with the index.html file
router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "./Public/index.html"));
});
//"/notes" responds with the notes.html file
router.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "../Public/notes.html"));
});

module.exports = router;