const express = require('express');

const router = express.Router();

module.exports = router;

// GET /api/
router.get('/api/', (req, res) => {
    res.send('API connection successfully established')
})

// POST /api/
router.post('/api/', (req, res) => {
    res.sendStatus(403)
})