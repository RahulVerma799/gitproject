const { timeStamp } = require("console");
const mongoose=require("mongoose");

const userSchema=mongoose.Schema({
    title:{
        type:String,
        required:true,
        unique:true,
    },

    description:{
        type:String,
        required:true,
    },
},
{timestamps:true}
)

module.exports=mongoose.model("user",userSchema);
