const User = require("./userSchema")


module.exports = checkUserPin = async (pin, cardDigits) => {
    console.log("card info" + cardDigits + pin)
    const user = await User.findOne({pinnumber: pin, cardnumber: {$regex: cardDigits}})
    
    if (user) {
        return true
    } else {
        return false
    }
}