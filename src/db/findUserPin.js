const User = require("./userSchema");

module.exports = findUserPin = (card, pin) => {
    User.findOne({cardNo: card, pin: pin}, (err, user) => {
        if (err) {
            console.log(err)
        } else if(!user) {
            console.log("card/pin not found")
            return {
                status: false,
                message: "pindNotFound"
            }
        } else {
            console.log("card/pin not found")
            return {
                status: true,
                data: user
            }
        } 
    })
}