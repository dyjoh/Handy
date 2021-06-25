const express = require('express');
const app = express();
const router = express.Router();
const bodyParser = require("body-parser")
const bcrypt = require("bcryptjs")
const User = require('../models/UserSchema')
const auth = require('../auth')



  

router.post("/register", async (req, res, next) => {

    var firstName = req.body.firstName.trim();
    var lastName = req.body.lastName.trim();
    var username = req.body.username.trim();
    var email = req.body.email.trim();
    var password = req.body.password;
    var passwordConf = req.body.passwordConf;

    var payload = req.body;

    if(firstName && lastName && username && email && password && passwordConf) {
        var user = await User.findOne({
            $or: [
                { username: username },
                { email: email }
            ]
        })
        .catch((error) => {
            console.log(error);
            payload.errorMessage = "Something went wrong.";
            res.send(payload)
        });

        if(user == null) {
            // No user found
            var data = req.body;
            const newUser = new User(data);
      const token = jwt.sign({ _id: newUser._id.toString() }, 'wecanfixitwithhandy')

      data.tokens = await newUser.tokens.concat({ token })
  
  
        //hash password bcrypt
        bcrypt.genSalt(10, (err, salt) =>{
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if(err){
              throw err
            }
            //set password to hashed
            newUser.password = hash
            
            
            //save user
            User.create(newUser)
            .then((user) => {
                req.session.user = user;
                return res.send({status:1, data: user, token: token })
            })
          })
        })

           
        }
        else {
            // User found
            if (email == user.email) {
                payload.errorMessage = "Email already in use.";
            }
            else {
                payload.errorMessage = "Username already in use.";
            }
            return res.status(200).send(payload);
        }
    }
    else {
        payload.errorMessage = "Make sure each field has a valid value.";
        return res.status(200).send(payload);
    }
})

router.post('/logout', auth, async (req, res) => {
    try {
        res.header("Authorization", 0)
        req.user.tokens = req.user.tokens.filter((token) => {
            return token.token !== req.token
        })
        console.log(req.user.tokens)

        res.header('Authorization','Bearer ' + req.user.tokens[0]);
        console.log(user)
        await req.user.save()

        res.send({status:1, data: req.user, location:'/'})
    } catch (e) {
        res.status(500).send({status:0})
    }
})

  
  module.exports = router;