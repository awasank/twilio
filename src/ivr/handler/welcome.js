const VoiceResponse = require('twilio').twiml.VoiceResponse;
const {gatherInputCalls, names_gatherInputCalls} = require("../options/data/optionsTest")
module.exports = function welcome() {
    const voiceResponse = new VoiceResponse();
    console.log("enter welcome")
    const gather = voiceResponse.gather({
      action: '/ivr/menu',
      numDigits: '1',
      method: 'POST',
    });
    
    const text = gatherInputCalls.filter(e => e.name === names_gatherInputCalls[0])
    // console.log(text[0])
    gather.say(text[0].properties.say,
      {loop: 3}
    );
  
    return voiceResponse.toString();
};