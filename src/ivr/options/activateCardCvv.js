const VoiceResponse = require('twilio').twiml.VoiceResponse;
const {names_sayPlay, sayPlay} = require("./data/optionsTest");
const {gatherInputCalls} = require("./data/optionsTest")

module.exports = activateCardCvv = (digits, expDate, cardDigits) => {
    console.log("Activate Card CVV")
    console.log(cardDigits + " in activate cvv")
    const cardInfo = gatherInputCalls.filter(e => e.name === "activate_cvv_gather")
    console.log(cardInfo[0].properties.say)

    const voiceResponse = new VoiceResponse();

    const gather = voiceResponse.gather({
        action: `/ivr/activate-card-cvv${expDate}&${cardDigits}`,
        numDigits: '3',
        method: 'POST',
    });

    gather.say(cardInfo[0].properties.say
    );

    return voiceResponse.toString();
}