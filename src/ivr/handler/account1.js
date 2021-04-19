const productsList = require("../options/products");
const offersList = require("../options/offers");
const accountInfo1 = require("../options/accountInfo1");
const accountInfo2 = require("../options/accountInfo2");
const redirectWelcome = require("../options/redirectWelcome")
const customerRep = require("../options/customerRep");
const invalidInfo = require("../options/invalidInfo");

const findUserCard = require("../../db/findUserCard");

module.exports = async function account1(digits) {
    console.log("handler account1")
    // console.log("digits")
    // console.log(typeof digits)
    // userInfo.cardNo = digits;
    // var cardInfoStatus = findUserCard(Number(digits));
    var digit = ''
    if (digits === "1234") {
        digit = '1';
    } else {
        // await invalidInfo()
        digit = '2';
    }
    // if (cardInfoStatus.status) {
    //   digit = '1';
    // } else {
    //   digit = '2';
    // }
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