const express = require('express');
const CountryModel = require('../models/countryModel');
const router = express.Router();

module.exports = router;

// GET /countries/
router.get('/countries/', async(req, res) => {
    try {
        const countries = await CountryModel.find({})
        res.status(200).json(countries);
    } catch (err) {
        res.status(500).json({err: err.message})
    }
})

// GET /country/countryCode
router.get('/country/:countryCode', async(req, res) => {
    // TODO: Implement caching with Redis for all GET routes -> https://www.youtube.com/watch?v=ztLsihiCHic
    try {
        var sendDate = (new Date()).getTime();
        const code = req.params['countryCode'];
        const country = await CountryModel.findOne({ countryCode: code })
        var receiveDate = (new Date()).getTime();
        var responseTimeMs = receiveDate - sendDate;
        country.push({'responseTimeMs': responseTimeMs});
        res.status(200).json(country)
    } catch (err) {
        res.status(500).json({err: err.message})
    }
})

// POST /country/
router.post('/country/', async(req, res) => {
    try {
        const country = await CountryModel.create(req.body);
        res.status(200)
        res.send('Country has been created: ' + country.name + ', with the capital city of ' + country.capital + ". ID:" + country._id )
    } catch (err) {
        res.status(500).json({error: err.message})
        // TODO: Implement linebreaks after each error message (name missing, capital missing etc.)
    }
}) 
