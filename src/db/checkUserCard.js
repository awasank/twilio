const User = require("./userSchema");

module.exports = checkUserCard = async (cardNo, callback) => {
    
    console.log("card number " + cardNo)
    await User.findOne({cardnumber: {$regex: cardNo}}, (err, user) => {
        if (err) {
            console.log(err)
            callback(err, false)
            // return false
        } else if (!user) {
            console.log("not found")
            callback(null, false)
            // return false
        } else {
            console.log("found")
            callback(null, true)
            // return true
        }
    })
    // console.log(res)
    // return res
}