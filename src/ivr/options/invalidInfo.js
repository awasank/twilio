const VoiceResponse = require("twilio").twiml.VoiceResponse;


module.exports = invalidInfo = () => {


    const voiceResponse = new VoiceResponse();
    // console.log("Products");
    console.log("invalid response")
    const gather = voiceResponse.gather({
        action: '/ivr/account1',
        numDigits: '4',
        method: 'POST',
    });

    gather.say("That is an invalid response"
    );
    // gather.say(offers_ending[0].properties.say,
    //     {voice: 'alice', language: 'en-GB'}
    // );


    return voiceResponse.toString();

    // const twiml = new voiceResponse;
    // console.log("invalid response")
    
    // twiml.say("This is an invalid response")

    // return twiml.toString();
}