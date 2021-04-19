const User = require("./userSchema");

module.exports = findUserCard = (card) => {
    console.log("findUserCard")
    return {
        status: true,
    }
    User.findOne({cardNo: card}, (err, user) => {
        if (err) {
            console.log(err)
        } else if(!user) {
            console.log("card not found")
            return {
                status: false,
            }
        } else {
            console.log("card not found")
            return {
                status: true,
            }
        } 
    })
}