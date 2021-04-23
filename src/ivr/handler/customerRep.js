const VoiceResponse = require('twilio').twiml.VoiceResponse;

module.exports = customerRep = (res) => {
    console.log("Handler customer support")
    var twimlResponse = new VoiceResponse();
  
  
    console.log(process.env.WORKFLOW_SID)
    
    var enqueue = twimlResponse.enqueue(
      {workflowSid: process.env.WORKFLOW_SID},"support");
    
    enqueue.task({},JSON.stringify({skills: "support"}));
    
    res.type('text/xml');
    return twimlResponse.toString();

}