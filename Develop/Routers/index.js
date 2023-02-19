const notesRouter = require('./notes');
const express = require('express')
const router = express.Router()

router.use("/api", notesRouter);

// GET /api/notes
// POST /api/notes

module.exports = router


