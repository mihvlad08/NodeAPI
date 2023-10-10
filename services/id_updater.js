// async function getAndIncrementLastCountryID() {
//     const response = await fetch('http://127.0.0.1:3000/countries')
//     const countries = await response.json()
//     const countriesLength = countries.length;
//     let id =  countries[countriesLength - 1]['_id'] + 1;
//     return id;
// }

function getAndIncrementLastCountryID() {
    const url = 'http://127.0.0.1:3000/countries';
    fetch(url)
    .then((response) => {
        if (!response.ok) {
        throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then((data) => {
        // Check if data is an array and has elements
        if (Array.isArray(data) && data.length > 0) {
        // Assign the last element to the variable ID
        let ID = data[data.length - 1]['_id'];
        ID = ID + 1;
        return ID;
        } else {
        console.log('No data or data is not an array.');
        }
    })
    .catch((error) => {
        console.error('Error:', error);
    });
    
}

module.exports = getAndIncrementLastCountryID;