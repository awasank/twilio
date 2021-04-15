const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minLength: 3,
    },
    firstName: String,
    lastName: String,
    cardNo: String,
    pin: String,
}, {
    timestamps: true,
})

const User = mongoose.model('User', userSchema);

module.exports = User;