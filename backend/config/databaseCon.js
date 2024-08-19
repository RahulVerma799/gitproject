const mongoose=require("mongoose");
require("dotenv").config();

exports.connectDb=()=>{
    mongoose.connect(process.env.dat_url,{})
    .then(()=>{console.log("db url connected")})
    .catch((err)=>{
        console.log("error in connection");
    })
}