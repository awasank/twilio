const VoiceResponse = require('twilio').twiml.VoiceResponse;
const {names_sayPlay, sayPlay} = require("./data/optionsTest");
const {gatherInputCalls} = require("./data/optionsTest")

module.exports = rewardPoints = (userAccount, pin, cardDigits) => {
    console.log("reward points")
    const cardInfo = gatherInputCalls.filter(e => e.name === "reward_menu")
    // const text_end = gatherInputCalls.filter(e => e.name === "acc_details_end")
    // const offers_ending = gatherInputCalls.filter(e => e.name === "promo_ending")
    const voiceResponse = new VoiceResponse();
    // console.log("Products");

    const gather = voiceResponse.gather({
        action: `/ivr/account-options-rewards/${pin}&${cardDigits}`,
        numDigits: '1',
        method: 'POST',
    });

    gather.say(cardInfo[0].properties.say
    );
    // gather.say(text_end[0].properties.say);


    return voiceResponse.toString();
}