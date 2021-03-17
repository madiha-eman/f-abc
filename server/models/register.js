const mongoose = require('mongoose');

const RegisSchema = mongoose.Schema({
    MRNO: {
        type: Number,
        required: [true, ""]
    },
    TokenNo: {
        type: Number,
        required: [true, "Token is required"]
    },
    RegistrationDate:{
        type: Date, 
        default: Date.now
    },
    Name: {
        type: String,
        required: [true, "Name is required"]
    },
    Father: {
        type: String,
        required: [true, "fatherName is required"]
    },
    DOB: {
        type: Date, 
        default: Date.now
    },
    Age: {
        type: String,
        required: [true, "Age is required"]
    },
    Gender: {
        type: String,
        required: [true, "gender is required"]
    },
    Religion: {
        type: String,
        required: [true, "religion is required"]
    },
    District: {
        type: String,
        required: [true, "CNIC is required"]
    },

    City: {
        type: String,
        required: [true, "City is required"]
    },
    Area: {
        type: String,
        required: [true, "Area is required"]
    },
    HousNo: {
        type: String,
        required: [true, "HousNo is required"]
    },
    Address: {
        type: String,
        required: [true, "Address is required"]
    },

    Help: {
        type: String,
        required: [true, "help type is required"]
    },
  
    CNIC: {
        type: Number,
        required: [true, "CNIC is required"]
    },
    Phone: {
        type: Number,
        required: [true, "Phone is required"]
    },
    OffPhone: {
        type: String,
        required: [true, "OffPhone is required"]
    },
    Mobile: {
        type: String,
        required: [true, "Mobile is required"]
    },
    RefBy: {
        type: String,
        required: [true, "RefBy is required"]
    },
    Remarks: {
        type: String,
        required: [true, "Remarks is required"]
    },
    IsRejected: {
        required: [false, "IsRejected is required"]
    },
    IsZakat: {
        type: String,
        required: [true, "IsZakat is required"]
    },
    IsPAFEmp: {
        required: [false, "IsPAFEmp is required"]
    },
    MonthlyConsLimit: {
        type: Number,
        required: [true, "MonthlyConsLimit is required"]
    },
    NOY: {
        type: String,
        required: [true, "NOY is required"]
    },
    EmpId: {
        type: Number,
        required: [true, "EmpId is required"]
    },
    IsStaff: {
        type: String,
        required: [true, "IsStaff is required"]
    },
    CreateUser: '',
    ModifyUser:'',
    ModifyDate: {
        type: String,
        required: [true, "CreateUser is required"]
    },
    createdAt: {
        type: Date,
        default: new Date()
    },

})

const Registeration = mongoose.model('Registeration', RegisSchema)
module.exports = Registeration