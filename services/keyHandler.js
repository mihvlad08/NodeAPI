async function validateKey(apikey) {
    try {
        const response = await fetch('http://127.0.0.1:3000/keys');
        if (!response.ok) {
            return false;
        }
        const keys = await response.json();

        const keys_looped = keys.map((keyObject) => keyObject.key);

        return keys_looped.includes(apikey);
    } catch (error) {
        console.error('Error in validateKey:', error);
        return false; // Return false if there's an error
    }
}

module.exports = validateKey;