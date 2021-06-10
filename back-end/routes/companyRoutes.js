const express = require('express');
const app = express();
const router = express.Router();
const bodyParser = require("body-parser")
const bcrypt = require("bcryptjs")
const Company = require('../models/CompanySchema')



router.post("/register", async (req, res, next) => {
    console.log(req.body)
    const {email, password, passwordConf, companyName, companyTypes, companyDescription } = req.body;
    let errors = [];
    
    var payload = req.body;
    var company = await Company.findOne({
      $or: [
        { companyName: companyName },
        { email: email }
      ]
    }).catch((e) =>{
      errors.push({msg: "Something went wrong"})
    })
  
    if(company){
      if(company.email === email){
        errors.push({msg: "Email already registered"})
      }
      
      if(company.companyName === companyName){
        errors.push({msg: "Username already exists"})
      }
    }
    //checks required 
    if(!email || !password || !passwordConf || !companyName || !companyTypes || !companyDescription){
      errors.push({msg: 'Please fill in all fields'})
    }
  
    if(password !== passwordConf){
      errors.push({msg: "Passwords do not match"})
    }
  
    if(errors.length > 0){
      console.log(req.body);
      payload.errors = errors;
      res.send( payload);
    }
    else{
      
      
      var data = req.body
      const newCompany = new Company(data);
        
  
        //hash password bcrypt
        bcrypt.genSalt(10, (err, salt) =>{
          bcrypt.hash(newCompany.password, salt, (err, hash) => {
            if(err){
              throw err
            }
            //set password to hashed
            newCompany.password = hash
  
            //save company
            newCompany.save().then((company) => {
              req.flash('success_msg', "You are now registered now can log in");
              return res.redirect("company/login")
            }).catch((e) => {
              res.status(500).send(e)
            })
          })
        })
  
  
      
      
    }
      
  })

  
  router.post('/login', async (req, res, next) => {
    var payload = req.body;
  
    const {logUsername, logPassword } = req.body;
    let errors = [];

    var user = await User.findOne({
      $or: [
        { username: logUsername },
        { email: logUsername }
      ]
    }).catch((e) =>{
      errors.push({msg: "Something went wrong"})
    })
  
    if(!logPassword && !logUsername){
      errors.push({msg: "Please fill out all fields"})
    }
    if(!user){
      errors.push({msg: "Email or Username is not Registered"})
    }
  
    if(errors.length > 0){
      console.log(errors);
      payload.errors = errors;
      res.send(payload);
    }
    else{
      const isMatch = await bcrypt.compare(logPassword, user.password)
  
      if(isMatch === true){
        req.session.user = user
        return res.redirect('/')
      }
      
      errors.push({msg: "Username, email, or password incorrect"})
      payload.errors = errors;
      res.send(payload);
  
      
    }
  })
  
  module.exports = router;