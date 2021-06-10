const express = require('express');
const middleware = require('../middleware');
const path = require('path');
const mongoose = require('./db');
const session = require('express-session');
const flash = require('connect-flash');
const bodyParser = require('body-parser');
const app = express();
const multer = require("multer");
var cors = require('cors');

app.use(cors());


const methodOverride = require("method-override");


//function to remove password from JSON.stringify
function replacer(key,value){
  if (key=="password") return undefined;
  
  else return value;
}

const mongoURI = require('../config/keys').MongoURI;

const port = process.env.PORT || 3000;

//server express port connection
const server = app.listen(port, () => {
    console.log("Listening on port " + port);
  });

//body parser
app.use(express.urlencoded({extended: true}));
app.use(express.json()) // To parse the incoming requests with JSON payloads

//Express Session
app.use(session({
  secret: 'Tool set to fix a Keyboard',
  resave: true,
  saveUninitialized: false,
}));

//static path to public dir
app.use(express.static(path.join(__dirname, 'public')))

//routes
const userRoute = require('../routes/userRoutes');
const companyRoute = require('../routes/companyRoutes');
const loginRoute = require('../routes/loginRoutes');


//route paths
app.use("/user", userRoute);
app.use("/company", companyRoute);
app.use("/", loginRoute);

app.get('/', middleware.requireLogin, (req, res, next) => {

  var payload = {
    title: "Home",
    userLoggedIn: req.session.user,
    userLoggedInJs: JSON.stringify(req.session.user, replacer)
  }

  res.status(200).send(payload)
})

