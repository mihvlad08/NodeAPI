const express = require('express');
const CountryModel = require('../models/countryModel');
const router = express.Router();

module.exports = router;

// GET /countries/
router.get('/countries/', async(req, res) => {
    try {
        const sendDate = (new Date()).getTime();
        const countries = await CountryModel.find({})
        const receiveDate = (new Date()).getTime();

        const response = {
            time: (receiveDate - sendDate + 4) + 'ms',
            ...countries
        };

        res.status(200).json(response);
    } catch (err) {
        res.status(500).json({err: err.message})
    }
})

// GET /country/countryCode
router.get('/country/:countryCode', async(req, res) => {
    // TODO: Implement caching with Redis for all GET routes -> https://www.youtube.com/watch?v=ztLsihiCHic
    try {
        const sendDate = (new Date()).getTime();

        const code = req.params['countryCode'];
        const country = await CountryModel.findOne({ countryCode: code })

        const receiveDate = (new Date()).getTime();

        const response = {
            time: (receiveDate - sendDate + 4) + 'ms',
            ...country.toObject(),
        };

        res.status(200).json(response)
    } catch (err) {
        res.status(500).json({err: err.message})
    }
})

// POST /country/
router.post('/country/', async(req, res) => {
    try {
        const sendDate = (new Date()).getTime();
        const country = await CountryModel.create(req.body);
        const receiveDate = (new Date()).getTime();

        res.status(200)

        const responseBody = {
            "message": 'Country has been created: ' + country.name + ', with the capital city of ' + country.capital +
                ". ID:" + country._id + '.',
            "time": (receiveDate - sendDate + 4) + 'ms.'
        }

        res.json(responseBody)

    } catch (err) {
        res.status(500).json({error: err.message})
        // TODO: Implement linebreaks after each error message (name missing, capital missing etc.)
    }
}) 
