const { Schema, model } = require('mongoose');
const Counter = require('./Counter.model');

const UserSchema = new Schema({
    id: {
        type: Number,
        unique: true,
        // required: true
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
}
);

UserSchema.pre('save', async function (next) {
    try {
      const counter = await Counter.findByIdAndUpdate(
        '_user',
        { $inc: { count: 1 } },
        { new: true, upsert: true }
      );
      this.id = counter.count;
      next();
    } catch (error) {
      next(error);
    }
  });

module.exports = model('users', UserSchema);