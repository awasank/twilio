const productsList = require("../../options/products");
const offersList = require("../../options/offers");
const accountInfo1 = require("../../options/accountInfo1");
const accountInfo2 = require("../../options/accountInfo2");
const redirectWelcome = require("../../options/redirectWelcome")
const accountMenu = require("../../options/accountMenu")
const customerRep = require("../../options/customerRep")
const checkUserPin = require("../../../db/checkUserPin")
<<<<<<< HEAD
module.exports = async function account2(userAcc, digits, cardDigits) {
    // console.log("Here")
    console.log("Handler account2")
    // console.log(digits)
    var digit = ''
    // if (digits === "1234") {
    //     digit = '1';
    // } else {
    //     digit = '2';
    // }
    // console.log("card digits" + cardDigits)
    const userCardStatus = await checkUserPin(digits, cardDigits);
    console.log(userCardStatus)
    var userAccount = {}
=======
module.exports = async function account2(digits) {
    //console.log("Here")
    console.log("account2")
    //console.log(digits)
    var digit = ''

    const userCardStatus = await checkUserPin(digits);
    //console.log(userCardStatus)
>>>>>>> origin/menu5
    if (userCardStatus) {
        userAccount = userCardStatus
        digit = 1
    } else {
        // cardDigits = digits
        digit = 2
    }
    const optionActions = {
      '1': accountMenu,
      '2': accountInfo2,
      '3': customerRep
    };
  
    return (optionActions[digit])
      ? optionActions[digit](userAccount, digits, cardDigits)
      : redirectWelcome();
};