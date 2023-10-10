const mongoose = require('mongoose');

mongoose
.connect('mongodb+srv://admin:admin@nodeapi.kczy3fx.mongodb.net/NodeAPI?retryWrites=true&w=majority')
.then(() => {
    console.log('Successfully connected to the database');
}).catch(() => {
    console.log('Failed to connect to the database');
})

module.exports = mongoose;