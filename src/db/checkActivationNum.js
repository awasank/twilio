const User = require("./userSchema")

module.exports = checkUserCard = async (cardNo) => {
    const user = await User.findOne({cardnumber: {$regex: cardNo}})
    console.log(cardNo + " database")
    
    if (user) {
        return true
    } else {
        return false
    }
}