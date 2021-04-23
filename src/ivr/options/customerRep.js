const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);
const VoiceResponse = require('twilio').twiml.VoiceResponse;

module.exports = customerRep = (userAccount, pin, cardDigits) => {
    console.log("Customer Rep")

    const response = new VoiceResponse();
    response.say("You will be redirected to a customer representative shortly")
    response.say("Connecting to customer representative.")

    console.log(response.toString());
    response.redirect('/ivr/enqueue');
    return response.toString();

}


