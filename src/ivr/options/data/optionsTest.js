const options = require("./firstPrototype2");


const states = options.states;

const gatherInputCalls = states.filter((state) => state.type === "gather-input-on-call")
const sayPlay = states.filter(state => state.type === "say-play")

const names_gatherInputCalls = [];
gatherInputCalls.map(e => names_gatherInputCalls.push(e.name))

const names_sayPlay = [];
sayPlay.map(e => names_sayPlay.push(e.name))

// inputCalls.map(e => console.log(e.properties.say))
// console.log(names)

module.exports = {
    names_gatherInputCalls,
    names_sayPlay,
    gatherInputCalls,
    sayPlay
}