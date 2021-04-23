const User = require("./userSchema")

module.exports = checkUserPin = async (cvv, expDate, cardDigits) => {
    const user = await User.findOne({cvv: cvv, expirydate: expDate, cardnumber: cardDigits})
    console.log(user)
    
    if (user) {
        return true
    } else {
        return false
    }
}