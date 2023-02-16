const express = require('express');
const path = require('path');

const PORT = 3001;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

app.get('/notes', (req, res) => {
  // res.sendFile(path.join(__dirname, '/public/notes.html'))
  console.log('GET notes')
  res.sendFile(path.join(__dirname, '/public/notes.html'))
  // res.status(200).json(notes)
});

app.post('/api/notes', (req, res) => {
console.log(`${req.method} request recieved to add new note`)
console.log(req.body)

const { noteTitle, noteText } = req.body;

  const newNote = {
    noteTitle,
    noteText
  };

  const response = {
    status: 'success',
    body: JSON.stringify(req.body),
  };

  console.log(response);
  res.status(201).json(response);
});

// this stays at the bottom
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);

