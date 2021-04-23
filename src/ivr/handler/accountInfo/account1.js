// const productsList = require("../../options/products");
// const offersList = require("../../options/offers");
const accountInfo1 = require("../../options/accountInfo1");
const accountInfo2 = require("../../options/accountInfo2");
const redirectWelcome = require("../../options/redirectWelcome")
// const accountMenu = require("../../options/accountMenu")
const customerRep = require("../../options/customerRep")
const checkUserCard = require("../../../db/checkUserCard")
const invalidInfo = require("../../options/invalidInfo");
const VoiceResponse = require('twilio').twiml.VoiceResponse;

module.exports = async function account1(digits, res) {
    
    console.log("Handler account1")
    
    var digit = ''
    
    var cardDigits = ''
    var userCardStatus = false;
    if (digits.length === 4) userCardStatus = await checkUserCard(digits);
    
    console.log(userCardStatus)

    var userAccount = {};
    if (userCardStatus) {
        cardDigits = digits
        digit = 1
        var say = ''
    } else {
        var say = 'That was an invalid response.'
        digit = 2
    }
    const optionActions = {
      '1': accountInfo2,
      '2': accountInfo1,
      '3': customerRep
    };
  
    return (optionActions[digit])
      ? optionActions[digit](userAccount, digits, cardDigits, say)
      : redirectWelcome();
};

