const VoiceResponse = require('twilio').twiml.VoiceResponse;
const {names_sayPlay, sayPlay} = require("./data/optionsTest");
const {gatherInputCalls} = require("./data/optionsTest")

module.exports = becomeMember = () => {
    console.log("accountMenu")
    const cardInfo = gatherInputCalls.filter(e => e.name === "become_member_gather")
    console.log(cardInfo[0].properties.say)
    const offers_ending = gatherInputCalls.filter(e => e.name === "become_member_say")
    const voiceResponse = new VoiceResponse();
    console.log("Account Menu");

    const gather = voiceResponse.gather({
        action: '/ivr/account-options',
        numDigits: '1',
        method: 'POST',
    });

    gather.say(cardInfo[0].properties.say
    );
    gather.say(offers_ending[0].properties.say);


    return voiceResponse.toString();
}