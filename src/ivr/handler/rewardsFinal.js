const productsList = require("../options/products");
const offersList = require("../options/offers");
// const accountInfo = require("../options/accountInfo");
const redirectWelcome = require("../options/redirectWelcome")
const customerRep = require("../options/customerRep");
const rewardPoints = require("../options/rewardPoints");
const accountMenu = require("../options/accountMenu");

module.exports = function rewardsFinal(digit) {
    console.log("Rewards")
    console.log(digit)
    const optionActions = {
      '1': rewardPoints, //
      '9': redirectWelcome,
      '0': customerRep
    };
  
    return (optionActions[digit])
      ? optionActions[digit]()
      : redirectWelcome();
};