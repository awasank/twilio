const Router = require('express').Router;
const {
    trigger, 
    gatherInputOnCall, 
    splitBasedOn, 
    sayPlay, 
    runFunction, 
    connectCallTo} = require("./handler")
const router = new Router();

const {states} = require("../ivr/options/data/optionsTest")

// console.log(states[0])
// POST: /ivr/welcome
// name, type, transition, properties
var type = [];
states.map(e => type.push(e.type))

var uniqueTypes = type.filter((item, index) => type.indexOf(item) === index)
// console.log(type)
// console.log(uniqueTypes)
var digit = 0;
// states.map((state) => {


//     switch (state.type) {
//         case 'trigger':
//             trigger(state);
//             break;
//         case 'gather-input-on-call':
//             gatherInputOnCall(state);
//             break;
//         case 'split-based-on':
//             splitBasedOn(state);
//             break;
//         case 'say-play':
//             sayPlay(state);
//             break;
//         case 'run-function':
//             runFunction(state);
//             break;
//         case 'connect-to-call':
//             connectCallTo(state);
//             break;            
//         default:
//             digit = 0
//             break;
//     }

// })
trigger(states)
module.exports = router;  