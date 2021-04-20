const User = require("./userSchema")

module.exports = checkUserPin = async (cvv, expDate, cardDigits) => {
    // cardNo = '6746';
    const user = await User.findOne({cvv: cvv, expirydate: expDate, cardnumber: {$regex: cardDigits}})
    console.log(user)
    // return user
    if (user) {
        return true
    } else {
        return false
    }
}