const mongoose = require("mongoose")
const User = require("./userSchema");

module.exports = async function connectdb(){
    mongoose.connect(process.env.MONGO_URL, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
      });
      mongoose.set("useCreateIndex", true);
    
    // cardNo = '1234';
    // const user = await User.findOne({cardnumber: {$regex: cardNo}})
    // console.log(user)
    
}

 