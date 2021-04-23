const VoiceResponse = require("twilio").twiml.VoiceResponse;


module.exports = invalidInfo = async () => {

    const voiceResponse = new VoiceResponse();

    console.log("invalid response")
    const gather = voiceResponse.gather({
        action: '/ivr/account1',
        numDigits: '4',
        method: 'POST',
    });

    voiceResponse.say("That was an invalid response"
    );

    return voiceResponse.toString();

}