const express=require("express")
const user=require("../model/database")
const app=express()
app.use(express.json())


exports.createcard=async(req,res)=>{
    try{

        const {title,description}=req.body;

        if(!title || !description){
            return res.status(400).json({
                succes:false,
                message:"title and description are required",
            })
        }

        const existUser=await user.findOne({title});

        if(existUser){
            return res.status(400).json({
                success:false,
                
                message:"card already exist"
            })
        }

        const newuser=await user.create({title,description})

        return res.status(401).json({
            success:true,
            data:newuser,
            message:"card created"
        })
    }
    catch(error){
        console.error(error)
        return res.status(500).json({
            success:false,
            message:"card not created"
        })
    }
}

exports.getAllcard=async(req,res)=>{
    try{
        const card=await user.find();
        res.status(400).json({
            success:true,
            data:card,
            message:"all card detail hs been shown"
        })
    }
    catch(error){
        console.error(error)
        return res.status(500).json({
            success:false,
            message:"card all details not found"
        });
    }
};

exports.getCardByTitle=async(req,res)=>{
    try{
        const card=await user.findOne({title:req.params.title});

        if(!card){
            return res.status(400).json({
                success:false,
                message:"Card title is wriiten is empty"
            })
        }

        return res.status(401).json({
            success:true,
            data:card,
            message:"card is found by title",
        });
        
    }
    catch(error){
        console.error(error)
        return res.status(500).json({
            success:false,
            message:"card all details by title"
        });
    }
};