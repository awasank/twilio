// const productsList = require("../../options/products");
// const offersList = require("../../options/offers");
const accountInfo1 = require("../../options/accountInfo1");
// const accountInfo2 = require("../../options/accountInfo2");
const redirectWelcome = require("../../options/redirectWelcome")
const customerRep = require("../../options/customerRep")
const activateCardDt = require("../../options/activateCardDt");
const checkUserCard = require("../../../db/checkUserCard");

module.exports = async function activateCardNumber(digits) {
    
    console.log("Activate card number ")

    console.log(digits + " activate card number digit")
    var digit = ''
    const userCardStatus = await checkUserCard(digits);
    
    let cardDigits = '';
    if (userCardStatus) {
        cardDigits = digits;
        digit = 1
    } else {
        digit = 2
    }
    console.log(digit)
    const optionActions = {
      '1': activateCardDt,
      '2': accountInfo1,
      '3': customerRep
    };
    
    return (optionActions[digit])
      ? optionActions[digit](digits, cardDigits)
      : redirectWelcome();
};