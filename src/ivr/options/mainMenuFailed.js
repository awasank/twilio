const VoiceResponse = require('twilio').twiml.VoiceResponse;
const {names_sayPlay, sayPlay} = require("./data/optionsTest");
const {gatherInputCalls} = require("./data/optionsTest")

module.exports = mainMenuFailed = () => {
    console.log("accountMenu")
    const cardInfo = gatherInputCalls.filter(e => e.name === "main_menu_failed")
    console.log(cardInfo[0].properties.say)

    const voiceResponse = new VoiceResponse();
    console.log("Account Menu");

    const gather = voiceResponse.gather({
        action: '/ivr/account-options',
        numDigits: '1',
        method: 'POST',
    });

    gather.say(cardInfo[0].properties.say
    );

    return voiceResponse.toString();
}