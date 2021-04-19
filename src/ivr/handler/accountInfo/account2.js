const productsList = require("../../options/products");
const offersList = require("../../options/offers");
const accountInfo1 = require("../../options/accountInfo1");
const accountInfo2 = require("../../options/accountInfo2");
const redirectWelcome = require("../../options/redirectWelcome")
const accountMenu = require("../../options/accountMenu")
const customerRep = require("../../options/customerRep")

module.exports = function account2(digits) {
    console.log("Here")
    console.log("account2")
    console.log(digits)
    var digit = ''
    if (digits === "1234") {
        digit = '1';
    } else {
        digit = '2';
    }

    const optionActions = {
      '1': accountMenu,
      '2': accountInfo2,
      '3': customerRep
    };
  
    return (optionActions[digit])
      ? optionActions[digit]()
      : redirectWelcome();
};