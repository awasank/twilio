const VoiceResponse = require('twilio').twiml.VoiceResponse;
const {names_sayPlay, sayPlay} = require("./data/optionsTest");
const {gatherInputCalls} = require("./data/optionsTest")

module.exports = lastTranaction = () => {
    console.log("last transaction")
    const cardInfo = sayPlay.filter(e => e.name === "last_trans_say")
    const text_end = gatherInputCalls.filter(e => e.name === "acc_details_end")
    // const offers_ending = gatherInputCalls.filter(e => e.name === "promo_ending")
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