const Router = require('express').Router;
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

const customerRep = require("./handler/customerRep")

const router = new Router();


// POST: /ivr/welcome
router.post('/welcome', async (req, res) => {
  console.log("/welcome")
  res.send(await welcome());
});

// POST: /ivr/menu
router.post('/menu', async (req, res) => {
  console.log("/ivr/menu")
  const digit = req.body.Digits;
  return res.send(await menu(digit));
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

router.post('/account1', async (req, res) => {
  console.log("/ivr/account1")
  const digit = req.body.Digits;
  return res.send(await account1(digit));
});

router.post('/account2:cardDigits', async (req, res) => {
  console.log("/ivr/account2")
  const digit = req.body.Digits;
// <<<<<<< HEAD
  const cardDigits = req.params.cardDigits
  return res.send(await account2(null, digit, cardDigits));

});

router.post('/account-options:pin&:cardDigits', async (req, res) => {
  console.log("/ivr/account-options")
  const digit = req.body.Digits;
  return res.send(await accountOptions(digit, req.params.pin, req.params.cardDigits));
});

router.post('/account-options-rewards/:pin&:cardDigits', async (req, res) => {
  console.log("/ivr/account-options-rewards")
  const digit = req.body.Digits;
  return res.send(await rewards(digit, req.params.pin, req.params.cardDigits));
});

router.post('/account-options-rewards-ending/:pin&:cardDigits', async (req, res) => {
  console.log("/account-options-rewards-ending")
  const digit = req.body.Digits;
  return res.send(await rewardsFinal(digit, req.params.pin, req.params.cardDigits));
});

router.post('/account-options-end/:pin&:cardDigits', async (req, res) => {
  console.log("/ivr/account-end")
  const digit = req.body.Digits;
  return res.send(await accountOptionsEnd(digit, req.params.pin, req.params.cardDigits));
});

router.post('/activate-card-number', async (req, res) => {
  console.log("/ivr/activate-card-number")
  const digit = req.body.Digits;
  return res.send( await activateCardNumber(digit));
});

router.post('/activate-card-date:cardDigits', async (req, res) => {
  console.log("/ivr/activate-card-date")
  const digit = req.body.Digits;
  const cardDigits = req.params.cardDigits;
  console.log(cardDigits);

  return res.send( await activateCardDate(digit, cardDigits));
});

router.post('/activate-card-cvv:expDate&:cardDigits', async (req, res) => {
  console.log("/ivr/activate-card-cvv")
  const digit = req.body.Digits;
  return res.send( await activateCardCvv(digit, req.params.expDate ,req.params.cardDigits));
});

router.post('/activate-card-final', (req, res) => {
  console.log("/ivr/activate-card-cvv")
  const digit = req.body.Digits;
  return res.send(activateCardFinal(digit));
});

router.post('/enqueue', function (req, res) {
  console.log("/ivr/enqueue")
  // var twimlResponse = new VoiceResponse();
  
  
  // console.log(process.env.WORKFLOW_SID)
  
  // var enqueue = twimlResponse.enqueue(
  //   {workflowSid: process.env.WORKFLOW_SID},"support");
  
  // enqueue.task({},JSON.stringify({skills: "support"}));
  
  // res.type('text/xml');
  // return res.send(twimlResponse.toString());
  return res.send(customerRep(res));
});

module.exports = router;
