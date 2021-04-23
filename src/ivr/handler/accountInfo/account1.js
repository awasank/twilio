const productsList = require("../../options/products");
const offersList = require("../../options/offers");
const accountInfo1 = require("../../options/accountInfo1");
const accountInfo2 = require("../../options/accountInfo2");
const redirectWelcome = require("../../options/redirectWelcome")
const accountMenu = require("../../options/accountMenu")
const customerRep = require("../../options/customerRep")
const checkUserCard = require("../../../db/checkUserCard")
const invalidInfo = require("../../options/invalidInfo");
module.exports = async function account1(digits) {
    // console.log("Here")
    console.log("Handler account1")
    // console.log(digits)
    var digit = ''
    // if (digits === "1234") {
    //     digit = '1';
    // } else {
    //     digit = '2';
    // }
    var cardDigits = ''
    var userCardStatus = false;
    if (digits.length === 4) userCardStatus = await checkUserCard(digits);
    
    console.log(userCardStatus)
// <<<<<<< HEAD
    var userAccount = {};
    if (userCardStatus) {
        cardDigits = digits

        digit = 1
    } else {
        
        // return invalidInfo()

        digit = 2
    }
    // digit = 1;
    const optionActions = {
      '1': accountInfo2,
      '2': accountInfo1,
      '3': customerRep
    };
  
    return (optionActions[digit])
      ? optionActions[digit](userAccount, digits, cardDigits)
      : redirectWelcome();
};