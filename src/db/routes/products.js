const router = require('express').Router();
let Product = require('../models/products.model');

router.route('/').get((req, res) => {
    Product.find()
        .then(product => res.json(product))
        .catch(err => res.status(400).json('Error: ' + err))
});

router.route('/add').post((req, res) => {
    const product = req.body.product;

    const newProduct = new Product({product});

    newProduct.save()
        .then(() => res.json('product added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;