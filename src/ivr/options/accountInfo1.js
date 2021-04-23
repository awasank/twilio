const VoiceResponse = require('twilio').twiml.VoiceResponse;
const {names_sayPlay, sayPlay} = require("./data/optionsTest");
const {gatherInputCalls} = require("./data/optionsTest")

module.exports = accountInfo1 = (d, p, c, say) => {
    console.log("options Account 1")
    
    const cardInfo = gatherInputCalls.filter(e => e.name === "card_info_gather")
    
    const voiceResponse = new VoiceResponse();
    const gather = voiceResponse.gather({
        action: '/ivr/account1',
        numDigits: '4',
        method: 'POST',
    });
    gather.say(say)
    gather.say(cardInfo[0].properties.say
    );
    voiceResponse.say("We did not receive any input.")
    voiceResponse.redirect("/ivr/welcome")
    
    return voiceResponse.toString();
}