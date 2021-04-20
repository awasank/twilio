const User = require("./userSchema")

module.exports = getAccountInfo = async (pin, cardDigits) => {
    // cardNo = '6746';
    console.log("card info" + cardDigits + pin)
    const user = await User.findOne({pinnumber: pin, cardnumber: {$regex: cardDigits}})
    // console.log(user)
    // return user
    if (user) {
        return user
    } else {
        return false
    }
}