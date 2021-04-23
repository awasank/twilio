// const productsList = require("../../options/products");
// const offersList = require("../../options/offers");
const accountInfo1 = require("../../options/accountInfo1");
// const accountInfo2 = require("../../options/accountInfo2");
const redirectWelcome = require("../../options/redirectWelcome")
const customerRep = require("../../options/customerRep")
// const activateCardDt = require("../../options/activateCardDt");
const activateFinal = require("../../options/activateFinal");
const checkActivationCvv = require("../../../db/checkActivationCvv");
const activateCardCvv = require("../../options/activateCardCvv");
const addUserDetail = require("../../../db/addUserDetail");

module.exports = async function activateCardDate(digits, expDate, cardDigits) {
    
    console.log("Activate card cvv")
    console.log(digits)
    var digit = ''

    const userCardStatus = await checkActivationCvv(digits, expDate, cardDigits);
    let cvv = '';
    if (userCardStatus) {
        cvv = digits
        digit = '1';
        // addUserDetail(digits, expDate, cardDigits)
    } else {
        digit = '2';
    }
    console.log(digit)
    const optionActions = {
      '1': activateFinal,
      '2': activateCardCvv,
      '3': customerRep
    };
    
    return (optionActions[digit])
      ? optionActions[digit](digits, expDate, cardDigits)
      : redirectWelcome();
};