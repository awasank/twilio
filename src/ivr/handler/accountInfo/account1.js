const productsList = require("../../options/products");
const offersList = require("../../options/offers");
const accountInfo1 = require("../../options/accountInfo1");
const accountInfo2 = require("../../options/accountInfo2");
const redirectWelcome = require("../../options/redirectWelcome")
const customerRep = require("../../options/customerRep")
const checkUserCard = require("../../../db/checkUserCard")
const invalidInfo = require("../../options/invalidInfo");

module.exports = function account1(digits) {
    // console.log("account1")
    // console.log("digits")
    // console.log(typeof digits)
    var digit = ''
    var userCardStatus = checkUserCard();
    console.log(userCardStatus)
    if (userCardStatus) {
        digit = '1';
    } else {
        // invalidInfo()
        console.log("Here")
        digit = '2';
    }
    console.log(digit)
    const optionActions = {
      '1': accountInfo2,
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