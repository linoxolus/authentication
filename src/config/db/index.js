const mongoose = require('mongoose');
const databaseURL = 'mongodb://127.0.0.1:27017/authen';

function connect() {
    mongoose.connect(databaseURL)
    .then(() => console.log(`Connect Successly To ${databaseURL}`))
    .catch(() => console.log(`Connect Fail To ${databaseURL}, Please Check Database`));
}

module.exports = { connect };
