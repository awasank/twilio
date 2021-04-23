// const productsList = require("../../options/products");
// const offersList = require("../../options/offers");
const accountInfo1 = require("../../options/accountInfo1");
// const accountInfo2 = require("../../options/accountInfo2");
const redirectWelcome = require("../../options/redirectWelcome")
const customerRep = require("../../options/customerRep")
// const activateCardDt = require("../../options/activateCardDt");
const activateCardCvv = require("../../options/activateCardCvv");
const checkDateActivation = require("../../../db/checkDateActivation");
const activateCardDt = require("../../options/activateCardDt");

module.exports = async function activateCardDate(digits, cardDigits) {
    console.log("Activate card date" + digits + " " + cardDigits)
    var digit = ''

    const userCardStatus = await checkDateActivation(digits, cardDigits);
    console.log(userCardStatus + " userCardStatus")
    let expDate = '';
    if (userCardStatus) {
        expDate = digits;
        digit = 1
    } else {
        digit = 2
    }
    console.log(digit)
    const optionActions = {
      '1': activateCardCvv,
      '2': activateCardDt,
      '3': customerRep
    };

    return (optionActions[digit])
      ? optionActions[digit](digits, expDate, cardDigits)
      : redirectWelcome();
};