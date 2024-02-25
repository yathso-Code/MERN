let mongoose = require("mongoose");

let url = process.env.MONGODB_URI;
// mongoose.connect(url)

let connectDB = async ()=>{
  try{
    await mongoose.connect(url);
    console.log("connect is stablice... width database")
  }catch(err){
   console.error("Database is not connect");
   process.exit(0);
  }
}

module.exports = connectDB;