const VoiceResponse = require('twilio').twiml.VoiceResponse;
const {names_sayPlay, sayPlay} = require("./data/optionsTest");
const {gatherInputCalls} = require("./data/optionsTest")

module.exports = accountBalance = () => {
    console.log("account balance")
    const cardInfo = sayPlay.filter(e => e.name === "acc_bal_say")
    const text_end = gatherInputCalls.filter(e => e.name === "acc_details_end")
    const voiceResponse = new VoiceResponse();
    // console.log("Products");

    const gather = voiceResponse.gather({
        action: '/ivr/account-options-end',
        numDigits: '1',
        method: 'POST',
    });

    gather.say(cardInfo[0].properties.say
    );
    gather.say(text_end[0].properties.say);


    return voiceResponse.toString();
}