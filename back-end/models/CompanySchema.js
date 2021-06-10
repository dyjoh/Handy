const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const Schema = mongoose.Schema;

const companySchema = new Schema({
    companyName: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        
    },
    companyDescription: {
        type: String,
        trim: true
    },
    companyTypes:[{
        type: String,
        required: true
    }],
    profilePic: {
        type: String,
        default: "/images/profilePic.jpg"
        
    }
       
}, {
    timestamps: true
})



var Company = mongoose.model('Company', companySchema);
module.exports = Company;