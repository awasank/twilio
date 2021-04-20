const productsList = require("../../options/products");
const offersList = require("../../options/offers");
const accountInfo1 = require("../../options/accountInfo1");
const accountInfo2 = require("../../options/accountInfo2");
const redirectWelcome = require("../../options/redirectWelcome")
const accountMenu = require("../../options/accountMenu")
const customerRep = require("../../options/customerRep")
const checkUserCard = require("../../../db/checkUserCard")

module.exports = async function account1(digits) {
    console.log("Here")
    console.log("account1")
    console.log(digits)
    var digit = ''
    // if (digits === "1234") {
    //     digit = '1';
    // } else {
    //     digit = '2';
    // }

    const userCardStatus = await checkUserCard(digits);
    console.log(userCardStatus)
    if (userCardStatus) {
        digit = 1
    } else {
        digit = 2
    }
    // digit = 1;
    const optionActions = {
      '1': accountInfo2,
      '2': accountInfo1,
      '3': customerRep
    };
  
    return (optionActions[digit])
      ? optionActions[digit]()
      : redirectWelcome();
};