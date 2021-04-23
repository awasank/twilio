const VoiceResponse = require('twilio').twiml.VoiceResponse;
const {names_sayPlay, sayPlay} = require("./data/optionsTest");
const {gatherInputCalls} = require("./data/optionsTest")

module.exports = activateCardDt = (cardDigits) => {
    console.log("Activate Card Number")
    const cardInfo = gatherInputCalls.filter(e => e.name === "card_expiry_activate_gather")

    const voiceResponse = new VoiceResponse();
    console.log("cardDigits" + cardDigits);

    const gather = voiceResponse.gather({
        action: `/ivr/activate-card-date${cardDigits}`,
        numDigits: '4',
        method: 'POST',
    });

    gather.say(cardInfo[0].properties.say
    );

    return voiceResponse.toString();
}