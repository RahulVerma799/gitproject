const express=require("express");
const app=express();
const cors = require('cors'); 



app.use(cors());

app.use(cors({
    origin: 'http://localhost:5173', // Replace with your frontend's origin
}));


require("dotenv").config();
const PORT=process.env.PORT||4000

require("./config/databaseCon").connectDb()

app.use(express.json());

const user=require("./routes/auth");
app.use("/api/",user);

app.listen(PORT,()=>{
    console.log(`run in this server ${PORT}`)
})
