const VoiceResponse = require('twilio').twiml.VoiceResponse;
const {names_sayPlay, sayPlay} = require("./data/optionsTest");
const {gatherInputCalls} = require("./data/optionsTest")

module.exports = orderDetails = () => {
    console.log("Order details")
    const offers = sayPlay.filter(e => e.name === "order_status_play")
    const offers_ending = gatherInputCalls.filter(e => e.name === "rewards_ending_gather")
    const voiceResponse = new VoiceResponse();
    // console.log("Products");

    const gather = voiceResponse.gather({
        action: '/ivr/account-options-rewards-ending',
        numDigits: '1',
        method: 'POST',
    });

    gather.say(offers[0].properties.say
    );
    gather.say(offers_ending[0].properties.say);


    return voiceResponse.toString();
}