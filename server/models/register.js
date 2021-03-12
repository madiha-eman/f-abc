const mongoose = require('mongoose');

const userRegis = mongoose.Schema({
    mrNO: {
        type: String,
        required: [true, ""]
    },
    tokenNo: {
        type: String,
        required: [true, "Token is required"]
    },
    createdAt: {
        type: Date,
        default: new Date()
    },

    name: {
        type: String,
        required: [true, "Name is required"]
    },
    fatherName: {
        type: String,
        required: [true, "fatherName is required"]
    },
    dob: {
        type: String,
        required: [true, "D.O.B is required"]
    },
    gender: {
        type: String,
        required: [true, "gender is required"]
    },
    religion: {
        type: String,
        required: [true, "religion is required"]
    },
    help: {
        type: String,
        required: [true, "help type is required"]
    },
    cnic: {
        type: String,
        required: [true, "CNIC is required"]
    },
    cnic: {
        type: String,
        required: [true, "CNIC is required"]
    },
    cnic: {
        type: String,
        required: [true, "CNIC is required"]
    },
    cnic: {
        type: String,
        required: [true, "CNIC is required"]
    },
  
    // isAdmin:{
    //     type: Number,
    //     default: 0
    // },
    
})

const User = mongoose.model('User', userSchema)
module.exports = User