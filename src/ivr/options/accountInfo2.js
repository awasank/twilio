const VoiceResponse = require('twilio').twiml.VoiceResponse;
const {names_sayPlay, sayPlay} = require("./data/optionsTest");
const {gatherInputCalls} = require("./data/optionsTest")


module.exports = accountInfo2 = (userAcc, digits, cardDigits, say) => {
    
    const cardInfo = gatherInputCalls.filter(e => e.name === "card_info_pin_gather")
    
    const voiceResponse = new VoiceResponse();
    
    console.log("options accountInfo2")
    const gather = voiceResponse.gather({
        action: `/ivr/account2${cardDigits}`,
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