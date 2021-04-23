const User = require("./userSchema")

module.exports = checkDateActivation = async (expDate, cardDigits) => {
    console.log(cardDigits + " date check")
    const user = await User.findOne({expirydate: expDate, cardnumber: {$regex: cardDigits}})
    console.log(user + " date check")
    // return user
    if (user) {
        return true
    } else {
        return false
    }
}