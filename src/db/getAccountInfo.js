const User = require("./userSchema")

module.exports = getAccountInfo = async (pin, cardDigits) => {
    console.log("card info" + cardDigits + pin)
    const user = await User.findOne({pinnumber: pin, cardnumber: {$regex: cardDigits}})
    
    if (user) {
        return user
    } else {
        return false
    }
}