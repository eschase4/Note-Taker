const express = require('express')
const { readAndAppend, readFromFile } = require('../helpers/fsUtils');
const path = require('path');
const uuid = require('../helpers/uuid');
const db = require('../db/db.json')

const router = express.Router()

router.get("/notes", (req, res) => {
  res.status(200).json(db)
  // readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)))
})

router.post('/notes', (req, res) => {
  console.log(`${req.method} request recieved to add new note`)
  console.log(req.body)

  const { title, text } = req.body;

  if (title && text) {
  const newNote = {
    title,
    text,
    id: uuid()
  };

  const response = {
    status: 'success',
    body: newNote,
  };

  res.status(200).json(response);
  console.log('Success')
} else {
  res.status(500).json('Error in posting note');
  console.log('error')
}
});
// GET /notesS
// POST /notes

module.exports = router