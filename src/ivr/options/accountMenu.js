const VoiceResponse = require('twilio').twiml.VoiceResponse;
const {names_sayPlay, sayPlay} = require("./data/optionsTest");
const {gatherInputCalls} = require("./data/optionsTest")

module.exports = accountMenu = (userAccount, pin, cardDigits) => {
    console.log("options accountMenu")
    const cardInfo = gatherInputCalls.filter(e => e.name === "check_acc_menu")
    console.log(cardInfo[0].properties.say)

    const voiceResponse = new VoiceResponse();

    const gather = voiceResponse.gather({
        action: `/ivr/account-options${pin}&${cardDigits}`,
        numDigits: '1',
        method: 'POST',
    });

    gather.say(cardInfo[0].properties.say
    );
    voiceResponse.say("We did not receive any input.")
    voiceResponse.redirect("/ivr/welcome")
    return voiceResponse.toString();
}