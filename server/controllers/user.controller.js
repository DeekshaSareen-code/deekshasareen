const express = require("express");
const app = express();
const jwt = require('jsonwebtoken');
const AmazonCognitoIdentity = require('amazon-cognito-identity-js');
require("dotenv").config();

const config = require('../../config.json');

const poolData = {
    UserPoolId : config.cognito.UserPoolId,
    ClientId: config.cognito.ClientId

};

const userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);

const register = async (req,res) => {
   console.log("step3")
   console.log(req.body.gender)
   const email = req.body.email;
   const givenname = req.body.firstName;
   const familyname = req.body.lastName;
   const password = req.body.password;
   const gender = req.body.gender;
   const dob = req.body.dob;
   const confirmpassword = req.body.confirmPassword;
   if(password!= confirmpassword){
       return  res.status(400)
       .json({ success: false, error: "Passwords don't match" });
   }
   
   const emailData={
       Name: 'email',
       Value: email
   };
   const familynameData={
    Name: 'family_name',
    Value: familyname
   };
    const givennameData={
    Name: 'given_name',
    Value: givenname
   }; 
   const genderData={
    Name: 'gender',
    Value: gender
   }
   const dobData={
    Name: 'birthdate',
    Value: dob
   }
   const emailAttribute = new AmazonCognitoIdentity.CognitoUserAttribute(emailData);
   const family_nameAttribute = new AmazonCognitoIdentity.CognitoUserAttribute(familynameData);
   const given_nameAttribute = new AmazonCognitoIdentity.CognitoUserAttribute(givennameData);
   const genderAttribute = new AmazonCognitoIdentity.CognitoUserAttribute(genderData);
   const birthdateAttribute = new AmazonCognitoIdentity.CognitoUserAttribute(dobData);

   userPool.signUp(email, password, [emailAttribute, family_nameAttribute, given_nameAttribute, genderAttribute, birthdateAttribute],null,(err,data)=>{
       if(err){
           return res
           .status(400)
           .json({ success: false, error: err.message });
   
       }

       res.send(data.user)
   })
};

const login = async (req,res) => {
    res.render('login')
};



module.exports = {
    register,
    login,
  };
