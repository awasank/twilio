const User = require("./userSchema");

module.exports = checkUserCard = (cardNo) => {
    // return false
    User.findOne({cardNo: cardNo}, (err, user) => {
        if (err) {
            return false
        } else if (!user) {
            return false
        } else {
            return true
        }
    })
}