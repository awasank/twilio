const VoiceResponse = require('twilio').twiml.VoiceResponse;
const {names_sayPlay, sayPlay} = require("./data/optionsTest");
const {gatherInputCalls} = require("./data/optionsTest")

module.exports = accountBalance = (userAccount, pin, cardDigits) => {
    console.log("options account balance")
    const cardInfo = sayPlay.filter(e => e.name === "acc_bal_say")
    const text_end = gatherInputCalls.filter(e => e.name === "acc_details_end")
    const voiceResponse = new VoiceResponse();
    
    console.log(pin)
    console.log(cardDigits)
    const gather = voiceResponse.gather({
        action: `/ivr/account-options-end/${pin}&${cardDigits}`,
        numDigits: '1',
        method: 'POST',
    });
    
    const text = "You account balance is $" + userAccount.balance;
    
    gather.say(text)
    gather.say(text_end[0].properties.say);


    return voiceResponse.toString();
}