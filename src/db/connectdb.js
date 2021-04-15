const mongoose = require("mongoose")
const User = require("./userSchema");
// const {MongoClient} = require('mongodb');
module.exports = async function connectdb(){
    mongoose.connect(process.env.MONGO_URL, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
      });
      mongoose.set("useCreateIndex", true);
    // User.  
    User.find({}, (err, usr) => {
        if (err){
            console.log(err)
        } else{
            usr.map(u => console.log(u))
        }
    })  
}

 