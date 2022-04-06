const Auth = require('aws-amplify')
const express = require("express");
const app = express();
const jwt = require('jsonwebtoken');
const AmazonCognitoIdentity = require('amazon-cognito-identity-js');
require("dotenv").config();

const jwkToPem = require('jwk-to-pem');

const config = require('../../config.json');
const { CognitoIdentityServiceProvider } = require('aws-sdk');

const poolData = {
    UserPoolId : config.cognito.UserPoolId,
    ClientId: config.cognito.ClientId

};

const userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);

const register = async (req,res) => {
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
    //res.render('login')
    console.log("step-3")

    const email = req.body.email;
    const password = req.body.password;
    console.log(email)
    console.log(password)
    const loginDetails = {
        Username: email,
        Password: password
    }
    const authenticationDetails =  new AmazonCognitoIdentity.AuthenticationDetails(loginDetails);
    const userDetails = {
        Username: req.body.email,
        Pool: userPool
    }
    const cognitoUser = new AmazonCognitoIdentity.CognitoUser(userDetails);

    cognitoUser.authenticateUser(authenticationDetails,{
        onSuccess: result=>{
            res
            .status(200)
           .json({ success: true, token: result.getIdToken().getJwtToken(),userName: req.body.email});
        },
        onFailure: err=>{
            console.log(err);
            res
           .status(400)
           .json({ success: false, error: err.message });
            // res.redirect('/login')
        }
    })

};
const likeUser = async (req,res) => {
    console.log('Step-3'+ req.body)
    res.send(req.body);
}

const getDashboard = async(req, res)=>{
    console.log(req.body.username)
    res.send(req.body);
}
const insertUser = async(req, res)=>{
    console.log(req.body.userName)
    res.send(req.body);
}

const getConnection = async(req, res)=>{
    
    res.send(req.body);
}

module.exports = {
    register,
    login,
    getDashboard,
    likeUser,
    insertUser,
    getConnection
  };
