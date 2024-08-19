const express=require("express")
const route=express.Router()

const {createcard,getAllcard, getCardByTitle}=require("../controller/auth");

route.post("/ping",createcard);
route.get("/alluser",getAllcard);
route.get("/card/:title",getCardByTitle);

module.exports=route;