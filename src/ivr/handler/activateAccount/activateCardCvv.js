const productsList = require("../../options/products");
const offersList = require("../../options/offers");
const accountInfo1 = require("../../options/accountInfo1");
const accountInfo2 = require("../../options/accountInfo2");
const redirectWelcome = require("../../options/redirectWelcome")
const customerRep = require("../../options/customerRep")
const activateCardDt = require("../../options/activateCardDt");
const activateFinal = require("../../options/activateFinal");

module.exports = function activateCardDate(digits) {
    // console.log("account1")
    // console.log("digits")
    // console.log(typeof digits)
    console.log("Activate card cvv")
    console.log(digits)
    var digit = ''
    if (digits === "111") {
        digit = '1';
    } else {
        digit = '2';
    }
    console.log(digit)
    const optionActions = {
      '1': activateFinal,
      '2': accountInfo1,
      '3': customerRep
    };
    // const digit = '2'
    // console.log("digit")
    // console.log(typeof digit)
    return (optionActions[digit])
      ? optionActions[digit]()
      : redirectWelcome();
};