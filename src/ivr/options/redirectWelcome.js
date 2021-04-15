const VoiceResponse = require('twilio').twiml.VoiceResponse;

module.exports = function redirectWelcome() {
    const twiml = new VoiceResponse();
    console.log("Redirect Welcome")
    twiml.say('Returning to the main menu', {
      voice: 'alice',
      language: 'en-GB',
    });
  
    twiml.redirect('/ivr/welcome');
  
    return twiml.toString();
}