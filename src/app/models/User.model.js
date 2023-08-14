const { Schema, model } = require('mongoose');

const User = new Schema({
    id: {
        type: Number,
        required: true,
        unique: true,
    },
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        minLength: 8,
    },
    name: {
        type: String,
    },
    email: {
        type: String
    }
});

module.exports = model('users', User);