const User = require("./userSchema");

module.exports = checkUserCard = async (req, res) => {
    const cardNo = req.params.cardNo
    console.log("card number " + cardNo)
    await User.findOne({cardnumber: {$regex: cardNo}}, (err, user) => {
        if (err) {
            // return res.status(400).json({
            //     status: false
            // })
            return false
        } else if (!user) {
            // return res.status(400).json({
            //     status: false
            // })
            // console.log("not found")
            // callback(null, false)
            return false
        } else {
            // return res.status(200).json({
            //     status: true
            // })
            // console.log("found")
            // callback(null, true)
            return true
        }
    })
    // console.log(res)
    // return res
}