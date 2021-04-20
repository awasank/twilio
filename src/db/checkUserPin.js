const User = require("./userSchema")

<<<<<<< HEAD
module.exports = checkUserPin = async (pin, cardDigits) => {
=======
module.exports = checkUserPin = async (pin) =>  {
>>>>>>> origin/menu5
    // cardNo = '6746';
    console.log("card info" + cardDigits + pin)
    const user = await User.findOne({pinnumber: pin, cardnumber: {$regex: cardDigits}})
    // console.log(user)
    // return user
    if (user) {
        return true
    } else {
        return false
    }
}