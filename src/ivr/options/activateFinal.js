const VoiceResponse = require('twilio').twiml.VoiceResponse;
const {names_sayPlay, sayPlay} = require("./data/optionsTest");
const {gatherInputCalls} = require("./data/optionsTest")

module.exports = activateFinal = () => {
    console.log("Activate Card Number")
    const cardInfo = gatherInputCalls.filter(e => e.name === "activation_final_gather")
    console.log(cardInfo[0].properties.say)

    const voiceResponse = new VoiceResponse();

    const gather = voiceResponse.gather({
        action: '/ivr/activate-card-final',
        numDigits: '1',
        method: 'POST',
    });

    gather.say(cardInfo[0].properties.say
    );

    return voiceResponse.toString();
}