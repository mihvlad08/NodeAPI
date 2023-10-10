const express = require('express');
const userKeyModel = require('../models/userKeyModel');
const router = express.Router();

module.exports = router;

// GET /keys/
router.get('/keys/', async(req, res) => {
    try {
        const { key } = req.query;

        const keys = await userKeyModel.find({});
        res.status(200).json(keys);

    } catch (err) {
        res.status(500).json({err: err.message})
    }
})