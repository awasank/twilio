// const accountInfo1 = require("../../options/accountInfo1");
// const accountInfo2 = require("../../options/accountInfo2");
const redirectWelcome = require("../../options/redirectWelcome")
const customerRep = require("../../options/customerRep")
// const accountBalance = require("../../options/accountBalance");
// const lastTransaction = require("../../options/lastTransaction");
// const rewardPoints = require("../../options/rewardPoints");
const accountMenu = require("../../options/accountMenu")

module.exports = async function accountOptionsEnd(digits, pin, cardDigits) {
    
    console.log("handler accountOptionsEnd")
    console.log(digits)
    console.log(pin)
    console.log(cardDigits)
    
    const optionActions = {
      '1': accountMenu,
      '9': redirectWelcome,
      '0': customerRep
    };
    
    return (optionActions[digits])
      ? optionActions[digits](null, pin, cardDigits)
      : redirectWelcome();
};