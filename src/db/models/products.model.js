const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const productSchema = new Schema({
    product: { type: String, required: true, trim: true, minLength: 1, },
}, {
    timestamps: true,
})

const Product = mongoose.model('Product', productSchema);

module.exports = Product;