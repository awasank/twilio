const VoiceResponse = require('twilio').twiml.VoiceResponse;
const {names_sayPlay, sayPlay} = require("./data/optionsTest");
const {gatherInputCalls} = require("./data/optionsTest")

module.exports = accountMenu = (userAccount, pin, cardDigits) => {
    console.log("options accountMenu")
    const cardInfo = gatherInputCalls.filter(e => e.name === "check_acc_menu")
    console.log(cardInfo[0].properties.say)
    // const offers_ending = gatherInputCalls.filter(e => e.name === "promo_ending")
    const voiceResponse = new VoiceResponse();
    // console.log("Account Menu");

    const gather = voiceResponse.gather({
        action: `/ivr/account-options${pin}&${cardDigits}`,
        numDigits: '1',
        method: 'POST',
    });

    gather.say(cardInfo[0].properties.say
    );
    // gather.say(offers_ending[0].properties.say,
    //     {voice: 'alice', language: 'en-GB'}
    // );


    return voiceResponse.toString();
}