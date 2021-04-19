const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: { type: String, required: true, unique: true, trim: true, minLength: 3, },
    firstname: { type: String, minLength: 3, required: true, },
    lastname: { type: String, minLength: 3, required: true, },
    cardnumber: { type: Number, minLength: 13, maxLength: 14 },
    pinnumber: { type: Number, minLength: 3, maxLength: 4 },
    balance: { type: Number },
    rewardpts: { type: Number },
    expirydate: { type: Number, minLength: 3, maxLength: 4 },
    cvv: { type: Number, minLength: 2, maxLength: 3 },
    lasttransaction: { type: Date, },
}, {
    timestamps: true,
})

const User = mongoose.model('User', userSchema);

module.exports = User;