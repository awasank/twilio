const twilio = require('twilio');
const Router = require('express').Router;
const ivrRouter = require('./ivr/router');

const router = new Router();

// GET: / - home page
router.get('/', (req, res) => {
  res.render('index');
});

const userRouter = require('./db/routes/users')
const promoRouter = require('./db/routes/promos')
const productRouter = require('./db/routes/products')

router.use('/users', userRouter);
router.use('/promos', promoRouter);
router.use('/products', productRouter);
router.use('/ivr', twilio.webhook({validate: false}), ivrRouter);

module.exports = router;
