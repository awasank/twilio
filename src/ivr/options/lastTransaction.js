const VoiceResponse = require('twilio').twiml.VoiceResponse;
const {names_sayPlay, sayPlay} = require("./data/optionsTest");
const {gatherInputCalls} = require("./data/optionsTest")

module.exports = lastTranaction = (userAccount, pin, cardDigits) => {
    console.log("last transaction")

    const text_end = gatherInputCalls.filter(e => e.name === "acc_details_end")

    const voiceResponse = new VoiceResponse();

    const gather = voiceResponse.gather({
        action: `/ivr/account-options-end/${pin}&${cardDigits}`,
        numDigits: '1',
        method: 'POST',
    });

    gather.say("Your last transaction was on" + userAccount.lasttransaction.substr(4, 11))
    gather.say(text_end[0].properties.say);


    return voiceResponse.toString();
}