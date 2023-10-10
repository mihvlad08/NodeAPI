const mongoose = require('mongoose');

const userKeySchema = mongoose.Schema(
    {
        username: {
            type: String,
            required: [true, 'Please enter a username']
        },
        apiKey: {
            type: String,
            required: [true, 'Please enter an API key.']
        },
    },
    {
        timestamps: false,
        versionKey: false,
    }
)

// Note to self: 3rd parameter here defines the MongoDB collection name
const UserKey = mongoose.model('User&Key', userKeySchema, "Users&Keys");

module.exports = UserKey;