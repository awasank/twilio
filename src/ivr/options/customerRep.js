const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);
const VoiceResponse = require('twilio').twiml.VoiceResponse;

module.exports = customerRep = () => {
    console.log("Customer Rep")
    const optionActions = {
        '0': '+12495015162',
        '3': '+12027336386',
        '4': '+12027336637',
      };
    
    const twiml = new VoiceResponse();
    twiml.dial(optionActions[0]);
    twiml.say("Connecting to customer representative.")
    return twiml.toString();

    // const response = new VoiceResponse();
    // response.dial('415-123-4567');
    // response.say('Goodbye');
    
    // console.log(response.toString());
    // client.calls
    // .create({
    //    url: 'http://demo.twilio.com/docs/voice.xml',
    //    to: '+12265059038',
    //    from: process.env.TWILIO_NUMBER
    //  })
    // .then(call => console.log(call.sid));
}


