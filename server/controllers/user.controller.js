const express = require("express");
const app = express();
const User = require("../models/user.models");
const jwt = require('jsonwebtoken');
require("dotenv").config();

const register = async (req,res) => {
    try {
        const user = await User.create({
            firstName: req.body.firstName,
            lastName:req.body.lastName,
            email:req.body.email,
            password:req.body.password,
            address:req.body.address
        });
        res.status(200).json({success: true});
    } catch (error) {
        console.log(error);
        res.status(400).json({success: false, error:error.message});
    }
};

const login = async (req,res) => {
    const user = await User.findOne({
        email:req.body.email,
        password:req.body.password
    })
    if(user){
        const token = jwt.sign({
            id:user._id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            address:user.address
        },
        process.env.TOKEN_SECRET_KEY
        )
        res.status(200).json({success: true, token:token,id:user._id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            address:user.address});
    }
    else{
        return res.status(400).json({success: false, message:'Credentials entered are wrong'})
    }
};



module.exports = {
    register,
    login,
  };
