const User = require("./userSchema")

module.exports = addUserDetail = (digits, expDate, cardDigits) => {
    User.findOneAndUpdate({cvv: cvv, expirydate: expDate, cardnumber: cardDigits}, (err, user) => {
        user.cardStatus = true
    })
}