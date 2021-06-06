const mongoose = require('mongoose')

class Database 
{
    constructor(){
       this.connect(); 
    }
    connect()
    {
        
        const mongoURI = require('../config/keys').MongoURI
        mongoose.connect(mongoURI, {
            useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false,
            useCreateIndex: true
        })
        .then(() => {
        console.log("Mongo DB Connected")
        })
        .catch((e) => {
        console.log(e)
        })
    }
}

module.exports = new Database();