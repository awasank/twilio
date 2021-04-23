// const productsList = require("../options/products");
// const offersList = require("../options/offers");
const accountInfo1 = require("../options/accountInfo1");
const redirectWelcome = require("../options/redirectWelcome")
// const becomeMember = require("../options/becomeMember");
const customerRep = require("../options/customerRep");
const activateCardNo = require("../options/activateCardNo");

module.exports = function menu(digit) {
    
    console.log(digit)
    console.log("Menu")
    const optionActions = {
      '1': accountInfo1,
      '2': activateCardNo,
      '0': customerRep,
      '9': redirectWelcome
    };
  
    return (optionActions[digit])
      ? optionActions[digit]()
      : redirectWelcome();
};