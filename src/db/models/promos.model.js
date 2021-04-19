const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const promoSchema = new Schema({
    promotions: { type: String, required: true, trim: true, minLength: 1, },
}, {
    timestamps: true,
})

const Promos = mongoose.model('Promos', promoSchema);

module.exports = Promos;