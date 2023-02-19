const express = require('express')
const { readAndAppend, readFromFile } = require('../helpers/fsUtils');
const fs = require('fs/promises')
const path = require('path');
const uuid = require('../helpers/uuid');
const db = require('../db/db.json');
const { appendFile } = require('fs');

const router = express.Router()

router.get("/notes", (req, res) => {
  res.status(200).json(db)
  // readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)))
})

router.post('/notes', (req, res) => {
  console.log(`${req.method} request recieved to add new note`)
  // console.log(req.body)

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
  const reviewString = JSON.stringify(newNote)
  // console.log(response.body)
  // fs.appendFile('./db/db.json', JSON.stringify(response))
  readAndAppend(newNote, './db/db.json');
  res.status(200).json(response.body);
  console.log('Success')
  window.alert("Note Added!")
} else {
  res.status(500).json('Error in posting note');
  // readAndAppend
  console.log('error')
}
});
// GET /notesS
// POST /notes

module.exports = router