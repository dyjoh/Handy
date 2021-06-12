const express = require('express');
const app = express();
const router = express.Router();
const bodyParser = require("body-parser")
const bcrypt = require("bcryptjs")
const Company = require('../models/CompanySchema')
const User = require('../models/UserSchema')
const jwt = require("jsonwebtoken");

  
  router.post('/login', async (req, res, next) => {
    var payload = req.body;
  
    const {logUsername, logPassword, logType } = req.body;
    let errors = [];
    if(!logType){
      errors.push({msg: "Something went wrong"});
      res.send({status: 0, data: errors});
    }
    if(logType === "user"){
      var user = await User.findOne({
        $or: [
          { username: logUsername },
          { email: logUsername }
        ]
      }).catch((e) =>{
        errors.push({msg: "Something went wrong"})
      })
    }

    if(logType === "company"){
      var user = await Company.findOne({
        $or: [
          { companyName: logUsername },
          { email: logUsername }
        ]
      }).catch((e) =>{
        errors.push({msg: "Something went wrong"})
      })
    }
    
  
    if(!logPassword && !logUsername){
      errors.push({msg: "Please fill out all fields"})
    }
    if(!user){
      errors.push({msg: "Email or Username is not Registered"})
    }
  
    if(errors.length > 0){
      console.log(errors);
      payload.errors = errors;
      res.send({status: 0, data: errors});
    }
    else{
      const isMatch = await bcrypt.compare(logPassword, user.password)
  
      if(isMatch === true){
        req.session.user = user
        const token = jwt.sign({ _id: user._id.toString() }, 'wecanfixitwithhandy')

        user.tokens = await user.tokens.concat({ token })
        return res.send({status: 1, data: payload, token: token})
      }
      
      errors.push({msg: "Username, email, or password incorrect"})
      payload.errors = errors;
      res.send({status: 0, data: errors});
  
      
    }
  })
  

  

  module.exports = router;