const VoiceResponse = require('twilio').twiml.VoiceResponse;
const {names_sayPlay, sayPlay} = require("./data/optionsTest");
const {gatherInputCalls} = require("./data/optionsTest")

module.exports = activateCardNo = () => {
    console.log("Activate Card Number")
    const cardInfo = gatherInputCalls.filter(e => e.name === "activate_card_16digit")
    console.log(cardInfo[0].properties.say)
    // const offers_ending = gatherInputCalls.filter(e => e.name === "promo_ending")
    const voiceResponse = new VoiceResponse();
    // console.log("Account Menu");

    const gather = voiceResponse.gather({
        action: '/ivr/activate-card-number',
        numDigits: '14',
        method: 'POST',
    });

    gather.say(cardInfo[0].properties.say
    );
    // gather.say(offers_ending[0].properties.say,
    //     {voice: 'alice', language: 'en-GB'}
    // );


    return voiceResponse.toString();
}