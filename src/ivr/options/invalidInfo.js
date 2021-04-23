const VoiceResponse = require("twilio").twiml.VoiceResponse;


module.exports = invalidInfo = async (url) => {

    const twiml = new VoiceResponse();
    console.log("Invalid info")
    twiml.say('Returning to the main menu');
  
    twiml.redirect(url);
  
    return twiml.toString();

}