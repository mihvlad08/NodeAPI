const express = require('express');
const app = express();

app.listen(3000, () => {
    console.log('Listening on port 3000');
})

app.get('/', (req, res) => {
    res.status(200).json('API Connection successfully established.')
})

const databaseConnector = require('./services/database');

app.use(express.json())

const mainRoute = require('./routes/api')
app.use(mainRoute)

const countryRoute = require('./routes/country');
app.use(countryRoute);

const masterRoute = require('./routes/master-route');
app.use(masterRoute);

// let country = 'RU'

// async function logMovies() {
//     const response = await fetch(`http://127.0.0.1:3000/country/${country}`);
//     const movies = await response.json();
//     console.log(movies);
// }

// logMovies();
  