const VoiceResponse = require('twilio').twiml.VoiceResponse;
const options = require("./firstPrototype");

const {names, inputCalls} = require("./optionsTest");

const productsList = require("./products");
const offersList = require("./offers");
const accountInfo = require("./accountInfo");
const redirectWelcome = require("./redirectWelcome")

exports.welcome = function welcome() {
    const voiceResponse = new VoiceResponse();
  
    const gather = voiceResponse.gather({
      action: '/ivr/menu',
      numDigits: '1',
      method: 'POST',
    });

    const text = inputCalls.filter(e => e.name === names[0])
    console.log(text[0])
    gather.say(text[0].properties.say,
      {loop: 3}
    );
  
    return voiceResponse.toString();
};

exports.menu = function menu(digit) {
    console.log("Here")
    console.log(digit)
    const optionActions = {
      '1': productsList,
      '2': offersList,
      '3': accountInfo
    };
  
    return (optionActions[digit])
      ? optionActions[digit]()
      : redirectWelcome();
};