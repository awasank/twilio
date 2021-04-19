const VoiceResponse = require('twilio').twiml.VoiceResponse;
const {names_sayPlay, sayPlay} = require("./data/optionsTest");
const {gatherInputCalls} = require("./data/optionsTest")

module.exports = offersList = () => {
    const offers = sayPlay.filter(e => e.name === "list_of_promos")
    const offers_ending = gatherInputCalls.filter(e => e.name === "promo_ending")
    const voiceResponse = new VoiceResponse();
    // console.log("Products");

    // const axios = require('axios');

    // let promo = null;

    // const fetchUser = async () =>{
  
    // await axios
    // .get(`http://localhost:5000/promos`)
    // .then(( response) => {


    //   let test = response;
    //   promo = test.data[0].promotions;
    //   console.log(test.data[0].promotions)

    //   //console.log(test.data.map( item => item.firstname))      
    // })
    // .catch((error) => {
    //   console.log(error);
    // })};


    // fetchUser();

    const gather = voiceResponse.gather({
        action: '/ivr/offers',
        numDigits: '1',
        method: 'POST',
    });

    gather.say(offers[0].say);
    gather.say(offers_ending[0].properties.say);


    return voiceResponse.toString();
}