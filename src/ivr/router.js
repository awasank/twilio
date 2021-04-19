const Router = require('express').Router;
// const {welcome, menu, planets} = require('./handler');
const welcome = require("./handler/welcome");
const menu = require("./handler/menu");
const products = require("./handler/products");
const offers = require("./handler/offers");

const account1 = require("./handler/accountInfo/account1");
const account2 = require("./handler/accountInfo/account2");
const accountOptions = require("./handler/accountInfo/accountOptions")
const accountOptionsEnd = require("./handler/accountInfo/accountOptionsEnd")

const activateCardNumber = require("./handler/activateAccount/activateCardNumber")
const activateCardDate = require("./handler/activateAccount/activateCardDate")
const activateCardCvv = require("./handler/activateAccount/activateCardCvv");
const activateCardFinal = require("./handler/activateAccount/activateCardFinal")

const rewards = require("./handler/rewards")
const rewardsFinal = require("./handler/rewardsFinal")

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

router.post('/account-options-rewards', (req, res) => {
  console.log("/ivr/account-options-rewards")
  const digit = req.body.Digits;
  return res.send(rewards(digit));
});

router.post('/account-options-rewards-ending', (req, res) => {
  console.log("/account-options-rewards-ending")
  const digit = req.body.Digits;
  return res.send(rewardsFinal(digit));
});
router.post('/account-options-end', (req, res) => {
  console.log("/ivr/account-end")
  const digit = req.body.Digits;
  return res.send(accountOptionsEnd(digit));
});

router.post('/activate-card-number', (req, res) => {
  console.log("/ivr/activate-card-number")
  const digit = req.body.Digits;
  return res.send(activateCardNumber(digit));
});

router.post('/activate-card-date', (req, res) => {
  console.log("/ivr/activate-card-date")
  const digit = req.body.Digits;
  return res.send(activateCardDate(digit));
});

router.post('/activate-card-cvv', (req, res) => {
  console.log("/ivr/activate-card-cvv")
  const digit = req.body.Digits;
  return res.send(activateCardCvv(digit));
});

router.post('/activate-card-final', (req, res) => {
  console.log("/ivr/activate-card-cvv")
  const digit = req.body.Digits;
  return res.send(activateCardFinal(digit));
});

// POST: /ivr/planets
// router.post('/planets', (req, res) => {
//   const digit = req.body.Digits;
//   res.send(planets(digit));
// });
// console.log(names_gatherInputCalls)
// console.log(names_sayPlay)
module.exports = router;
