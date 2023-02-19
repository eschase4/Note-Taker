const express = require('express');
const path = require('path');
const uuid = require('./Helpers/uuid');
const apiRouter = require('./Routers');


const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

//app.use('/api', router)
app.use(apiRouter)
// GET localhost:3001/api/notes
// POST localhost:3001/api/notes

// GET localhost:3001/notes
app.get('/notes', (req, res) => {
  // res.sendFile(path.join(__dirname, '/public/notes.html'))
  console.log('GET notes')
  res.sendFile(path.join(__dirname, '/public/notes.html'))
  // res.status(200).json(notes)
});

// GET localhost:3001/*
app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);


// this stays at the bottom
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);

