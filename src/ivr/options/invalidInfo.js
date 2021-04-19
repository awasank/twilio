const VoiceResponse = require('twilio').twiml.VoiceResponse;

module.exports = invalidInfo = () => {
    console.log("Invalid info")
    console.log("Invalid info")
    const twiml = new VoiceResponse()
  
    twiml.say("The information you provided is not correct");
  
    return twiml.toString();
}