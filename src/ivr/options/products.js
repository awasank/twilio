const VoiceResponse = require('twilio').twiml.VoiceResponse;
const {names_sayPlay, sayPlay} = require("./data/optionsTest");
const {gatherInputCalls} = require("./data/optionsTest")

module.exports = productsList = () => {
    const product = sayPlay.filter(e => e.name === "list_of_products")
    const product_ending = gatherInputCalls.filter(e => e.name === "products_ending")
    const voiceResponse = new VoiceResponse();
    // console.log("Products");

    const gather = voiceResponse.gather({
        action: '/ivr/products',
        numDigits: '1',
        method: 'POST',
    });

    gather.say(product[0].properties.say
    );
    gather.say(product_ending[0].properties.say);


    return voiceResponse.toString();
}