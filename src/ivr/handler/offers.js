const productsList = require("../options/products");
const offersList = require("../options/offers");
// const accountInfo = require("../options/accountInfo");
const redirectWelcome = require("../options/redirectWelcome")
const customerRep = require("../options/customerRep")

module.exports = function products(digit) {
    console.log("Products")
    console.log(digit)
    const optionActions = {
      '1': offersList,
      '9': redirectWelcome,
      '0': customerRep
    };
  
    return (optionActions[digit])
      ? optionActions[digit]()
      : redirectWelcome();
};