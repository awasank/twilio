// const productsList = require("../../options/products");
// const offersList = require("../../options/offers");
// const accountInfo1 = require("../../options/accountInfo1");
const accountInfo2 = require("../../options/accountInfo2");
const redirectWelcome = require("../../options/redirectWelcome")
const accountMenu = require("../../options/accountMenu")
const customerRep = require("../../options/customerRep")
const checkUserPin = require("../../../db/checkUserPin")

module.exports = async function account2(userAcc, digits, cardDigits) {

    console.log("Handler account2")

    var digit = ''

    const userCardStatus = await checkUserPin(digits, cardDigits);
    console.log(userCardStatus)
    var userAccount = {}

    if (userCardStatus) {
        userAccount = userCardStatus
        digit = 1
        var say = ''
    } else {
        digit = 2
        var say = "That was an invalid response."
    }
    const optionActions = {
      '1': accountMenu,
      '2': accountInfo2,
      '3': customerRep
    };
  
    return (optionActions[digit])
      ? optionActions[digit](userAccount, digits, cardDigits, say)
      : redirectWelcome();
};