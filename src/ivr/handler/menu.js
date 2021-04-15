const productsList = require("../options/products");
const offersList = require("../options/offers");
const accountInfo1 = require("../options/accountInfo1");
const redirectWelcome = require("../options/redirectWelcome")
const becomeMember = require("../options/becomeMember")
module.exports = function menu(digit) {
    console.log("Here")
    console.log(digit)
    const optionActions = {
      '1': productsList,
      '2': offersList,
      '3': accountInfo1,
      '4': becomeMember
    };
  
    return (optionActions[digit])
      ? optionActions[digit]()
      : redirectWelcome();
};