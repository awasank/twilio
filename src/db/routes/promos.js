const router = require('express').Router();
let Promos = require('../models/promos.model');

router.route('/').get((req, res) => {
    Promos.find()
        .then(promo => res.json(promo))
        .catch(err => res.status(400).json('Error: ' + err))
});

router.route('/add').post((req, res) => {
    const promotions = req.body.promotions;

    const newPromo = new Promos({promotions});

    newPromo.save()
        .then(() => res.json('promotion added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;