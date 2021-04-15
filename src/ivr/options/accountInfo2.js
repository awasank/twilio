const VoiceResponse = require('twilio').twiml.VoiceResponse;
const {names_sayPlay, sayPlay} = require("./data/optionsTest");
const {gatherInputCalls} = require("./data/optionsTest")

module.exports = accountInfo2 = () => {
    const cardInfo = gatherInputCalls.filter(e => e.name === "card_info_pin_gather")
    // const offers_ending = gatherInputCalls.filter(e => e.name === "promo_ending")
    const voiceResponse = new VoiceResponse();
    // console.log("Products");
    console.log("accountInfo2")
    const gather = voiceResponse.gather({
        action: '/ivr/account2',
        numDigits: '4',
        method: 'POST',
    });

    gather.say(cardInfo[0].properties.say
    );
    // gather.say(offers_ending[0].properties.say,
    //     {voice: 'alice', language: 'en-GB'}
    // );


    return voiceResponse.toString();
}