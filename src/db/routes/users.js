const router = require('express').Router();
let User = require('../models/user.model');

router.route('/').get((req, res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err))
});

router.route('/add').post((req, res) => {
    const username = req.body.username;
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const cardnumber = Number(req.body.cardnumber);
    const pinnumber = Number(req.body.pinnumber);
    const balance = Number(req.body.balance);
    const rewardpts = Number(req.body.rewardpts);
    const expirydate = Number(req.body.expirydate);
    const cvv = Number(req.body.cvv);
    const lasttransaction = Date.parse(req.body.lasttransaction);

    const newUser = new User({
        username,
        firstname,
        lastname,
        cardnumber,
        pinnumber,
        balance,
        rewardpts,
        expirydate,
        cvv,
        lasttransaction

    });


    newUser.save()
        .then(() => res.json('User added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;