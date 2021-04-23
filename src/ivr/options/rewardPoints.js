const VoiceResponse = require('twilio').twiml.VoiceResponse;
const {names_sayPlay, sayPlay} = require("./data/optionsTest");
const {gatherInputCalls} = require("./data/optionsTest")

module.exports = rewardPoints = (userAccount, pin, cardDigits) => {
    console.log("reward points")
    const cardInfo = gatherInputCalls.filter(e => e.name === "reward_menu")
    
    const voiceResponse = new VoiceResponse();

    const gather = voiceResponse.gather({
        action: `/ivr/account-options-rewards/${pin}&${cardDigits}`,
        numDigits: '1',
        method: 'POST',
    });

    gather.say(cardInfo[0].properties.say
    );

    return voiceResponse.toString();
}