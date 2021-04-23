// const accountInfo1 = require("../../options/accountInfo1");
// const accountInfo2 = require("../../options/accountInfo2");
const redirectWelcome = require("../../options/redirectWelcome")
const customerRep = require("../../options/customerRep")
// const accountBalance = require("../../options/accountBalance");
// const lastTransaction = require("../../options/lastTransaction");
// const rewardPoints = require("../../options/rewardPoints");
// const accountMenu = require("../../options/accountMenu")

module.exports = function activateCardFinal(digits) {
    
    console.log("Activate Final")
    console.log(digits)
    const optionActions = {
      '9': redirectWelcome,
      '0': customerRep
    };
    
    return (optionActions[digits])
      ? optionActions[digits]()
      : redirectWelcome();
};