const express = require('express');
const app = express();
const router = express.Router();
const bodyParser = require("body-parser")
const bcrypt = require("bcryptjs")
const Company = require('../models/CompanySchema')


router.get("/", async (req, res, next) => {
  var searchObj = req.query;
  console.log(req.body)

  if(req.query.search !== undefined) {
      searchObj = {
          $or: [
              { companyName: { $regex: req.query.search, $options: "i" }},
              { companyAddress: { $regex: req.query.search, $options: "i" }},
              { zipCode: { $regex: req.query.search, $options: "i" }},
              { state: { $regex: req.query.search, $options: "i" }},

          ]
      }
  }

  Company.find(searchObj)
  .then(results =>{ 
    res.status(200).send(results)
})
  .catch(error => {
      console.log(error);
      res.sendStatus(400);
  })
});


  router.post("/register", async (req, res, next) => {

    const {email, password, passwordConf, companyName, companyTypes, companyDescription, companyAddress, zipCode, state } = req.body;


    var payload = req.body;

    if(companyTypes && companyDescription && companyName && email && password && passwordConf && companyAddress && zipCode && state) {
        var user = await Company.findOne({
            $or: [
                { companyname: companyName },
                { email: email }
            ]
        })
        .catch((error) => {
            console.log(error);
            payload.errorMessage = "Something went wrong.";
            res.send(payload)
        });

        if(user == null) {
            // No company found
            var data = req.body;
            const newCompany = new Company(data);
      const token = jwt.sign({ _id: newCompany._id.toString() }, 'wecanfixitwithhandy')

      data.tokens = await newCompany.tokens.concat({ token })
  
  
        //hash password bcrypt
        bcrypt.genSalt(10, (err, salt) =>{
          bcrypt.hash(newCompany.password, salt, (err, hash) => {
            if(err){
              throw err
            }
            //set password to hashed
            newCompany.password = hash
            
            
            //save user
            Company.create(newCompany)
            .then((company) => {
                req.session.user = user;
                return res.send({status:1, data: company, token: token })
            })
          })
        })

           
        }
        else {
            // company found
            if (email == company.email) {
                payload.errorMessage = "Email already in use.";
            }
            else {
                payload.errorMessage = "Company Name already in use.";
            }
            return res.status(200).send(payload);
        }
    }
    else {
        payload.errorMessage = "Make sure each field has a valid value.";
        return res.status(200).send(payload);
    }
}) 

  module.exports = router;