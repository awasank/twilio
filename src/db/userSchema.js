const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    username:{
        type: String,
        required: true,
        unique: true,
        trim: true,
        minLength: 3,
    },
    firstname: String,
    lastname: String,
    cardnumber: String,
    pinnumber: String,
    balance: String,
    rewardpts: String,
    cvv: String,
    cardnumber: String,
    lasttransaction: Date
}, {
    timestamps: true,
})

const User = mongoose.model('User', userSchema);

module.exports = User;