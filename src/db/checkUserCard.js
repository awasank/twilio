const User = require("./userSchema")

module.exports = checkUserCard = async (cardNo) => {
    const user = await User.findOne({cardnumber: {$regex: cardNo}})
    console.log(cardNo + " db")
    
    if (user) {
        return true
    } else {
        return false
    }
}