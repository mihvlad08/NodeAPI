const mongoose = require('mongoose');

mongoose
    .connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@nodeapi.kczy3fx.mongodb.net/NodeAPI?retryWrites=true&w=majority`)
    .then(() => {
        console.log('Successfully connected to the database');
    }).catch(() => {
    console.log('Failed to connect to the database');
})

module.exports = mongoose;