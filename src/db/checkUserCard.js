const User = require("./userSchema")

module.exports = checkUserCard = async (cardNo) => {
    // cardNo = '6746';
    const user = await User.findOne({cardnumber: {$regex: cardNo}})
    console.log(cardNo + " db")
    // return user
    if (user) {
        return true
    } else {
        return false
    }
}