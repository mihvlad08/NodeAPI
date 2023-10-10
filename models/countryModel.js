const mongoose = require('mongoose'); 
const getAndIncrementLastCountryID = require('../services/id_updater');

let id = getAndIncrementLastCountryID();
// TODO: Implement custom _id and figure out why the id is coming as undefined in the line above.
// https://stackoverflow.com/questions/34094806/return-from-a-promise-then

const countrySchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Please enter a country name']
        },
        capital: {
            type: String,
            required: [true, 'Please enter a capital city']
        },
        countryCode: {
            type: String,
            required: [true, 'Please enter a valid country code']
        },
        GDP: {
            type: Number,
            required: [true, 'Please enter a GDP (in $)']
        },
        Population: {
            type: Number,
            required: [true, 'Please enter a population number']
        }
    },
    {
        timestamps: false,
        versionKey: false,
    }
)

// Note to self: 3rd parameter here defines the MongoDB collection name
const Country = mongoose.model('Country', countrySchema, "Countries");

module.exports = Country;