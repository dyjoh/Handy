const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const Schema = mongoose.Schema;
const validator = require('validator')
jwt = require('jsonwebtoken');

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
        unique: true,
        lowercase: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Email is invalid')
            }
        }
    },
    password: {
        type: String,
        required: true,
        minlength: 7,
        trim: true,
        validate(value) {
            if (value.toLowerCase().includes('password')) {
                throw new Error('Password cannot contain "password"')
            }
        }
        
    },
    companyDescription: {
        type: String,
        trim: true
    },
    companyTypes:[{
        type: String,
        required: true
    }],
    tokens: [{
        token: {
            type: String,
            required: true
        }
    }],
    profilePic: {
        type: String,
        default: "/images/profilePic.jpg"
        
    },
    companyAddress: {
        type: String,
        required: true,
        trim: true
    },
    state: {
        type: String,
        required: true
    },
    zipCode: {
        type: String,
        required: true
    }
       
}, {
    timestamps: true
})

companySchema.methods.generateAuthToken = async function () {
    const user = this
    const token = jwt.sign({ _id: user._id.toString() }, 'wecanfixitwithhandy')

    user.tokens = user.tokens.concat({ token })
    await user.save()

    return token
}

var Company = mongoose.model('Company', companySchema);
module.exports = Company;