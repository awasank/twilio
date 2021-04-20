const User = require("./userSchema")

module.exports = checkUserPin = async (pin) =>  {
    // cardNo = '6746';
    const user = await User.findOne({pinnumber: pin})
    // console.log(user)
    // return user
    if (user) {
        return true
    } else {
        return false
    }
}