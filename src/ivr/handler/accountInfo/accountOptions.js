const accountInfo1 = require("../../options/accountInfo1");
const accountInfo2 = require("../../options/accountInfo2");
const redirectWelcome = require("../../options/redirectWelcome")
const customerRep = require("../../options/customerRep")
const accountBalance = require("../../options/accountBalance");
const lastTransaction = require("../../options/lastTransaction");
const rewardPoints = require("../../options/rewardPoints");
const getAccountInfo = require("../../../db/getAccountInfo")

module.exports = async function accountOptions(digits, pin, cardDigits) {
    // console.log("account1")
    // console.log("digits")
    // console.log(typeof digits)
    console.log("handler accountOptions")
    // console.log(digits)
    console.log(pin)
    console.log(cardDigits)
    const userAccount = await getAccountInfo(pin, cardDigits)
    // console.log(userAccount)
    const optionActions = {
      '1': accountBalance,
      '2': lastTransaction,
      '3': rewardPoints,
      '4': customerRep, // card issue
      '5': customerRep // account issue
    };
    // const digit = '2'
    // console.log("digit")
    // console.log(typeof digit)
    return (optionActions[digits])
      ? optionActions[digits](userAccount, pin, cardDigits)
      : redirectWelcome();
};