const test = (t) => {
    const {name, type, transitions, properties} = t
    console.log(name,type)
}

trigger = (states) => {
    states.map(s => test(s))
    // test(state)
} 
gatherInputOnCall = (state) => {
    test(state)
} 
splitBasedOn = (state) => {
    test(state)
} 
sayPlay = (state) => {
    test(state)
} 
runFunction = (state) => {
    test(state)
} 
connectCallTo = (state) => {
    test(state)
}

module.exports = {
    trigger, 
    gatherInputOnCall, 
    splitBasedOn, 
    sayPlay, 
    runFunction, 
    connectCallTo
}