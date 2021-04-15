const Router = require('express').Router;
// const {welcome, menu, planets} = require('./handler');
const welcome = require("./handler/welcome");
const menu = require("./handler/menu");
const products = require("./handler/products");
const offers = require("./handler/offers");
const account1 = require("./handler/account1");
const account2 = require("./handler/account2");
const accountOptions = require("./handler/accountOptions")
const accountOptionsEnd = require("./handler/accountOptionsEnd")

const {names_gatherInputCalls, names_sayPlay} = require("./options/data/optionsTest")

const router = new Router();

// POST: /ivr/welcome
router.post('/welcome', (req, res) => {
  console.log("/welcome")
  res.send(welcome());
});

// POST: /ivr/menu
router.post('/menu', (req, res) => {
  console.log("/ivr/menu")
  const digit = req.body.Digits;
  return res.send(menu(digit));
});

router.post('/products', (req, res) => {
  console.log("/ivr/products")
  const digit = req.body.Digits;
  return res.send(products(digit));
});

router.post('/offers', (req, res) => {
  console.log("/ivr/offers")
  const digit = req.body.Digits;
  return res.send(offers(digit));
});

router.post('/account1', (req, res) => {
  console.log("/ivr/account1")
  const digit = req.body.Digits;
  return res.send(account1(digit));
});

router.post('/account2', (req, res) => {
  console.log("/ivr/account2")
  const digit = req.body.Digits;
  return res.send(account2(digit));
});

router.post('/account-options', (req, res) => {
  console.log("/ivr/account-options")
  const digit = req.body.Digits;
  return res.send(accountOptions(digit));
});

router.post('/account-options-end', (req, res) => {
  console.log("/ivr/account-end")
  const digit = req.body.Digits;
  return res.send(accountOptionsEnd(digit));
});

// POST: /ivr/planets
// router.post('/planets', (req, res) => {
//   const digit = req.body.Digits;
//   res.send(planets(digit));
// });
console.log(names_gatherInputCalls)
console.log(names_sayPlay)
module.exports = router;
