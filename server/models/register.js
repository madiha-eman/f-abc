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
    Name: {
        type: String,
        required: [true, "Name is required"]
    },
    FatherName: {
        type: String,
        required: [true, "fatherName is required"]
    },
    DOB: {
        type: new Date(),
        required: [true, "D.O.B is required"]
    },
    Gender: {
        type: String,
        required: [true, "gender is required"]
    },
    Religion: {
        type: String,
        required: [true, "religion is required"]
    },
    Help: {
        type: String,
        required: [true, "help type is required"]
    },
    District: {
        type: String,
        required: [true, "CNIC is required"]
    },
    CNIC: {
        type: Number,
        required: [true, "CNIC is required"]
    },
    PhoneNo: {
        type: Number,
        required: [true, "CNIC is required"]
    },
    Mobile: {
        type: String,
        required: [true, "CNIC is required"]
    },
    OffPhone: {
        type: String,
        required: [true, "CNIC is required"]
    },
    RefBy: {
        type: String,
        required: [true, "CNIC is required"]
    },
    Remarks: {
        type: String,
        required: [true, "CNIC is required"]
    },
    IsRejected: {
        required: [false, "CNIC is required"]
    },
    IsZakat: {
        type: String,
        required: [true, "CNIC is required"]
    },
    IsPAFEmp: {
        required: [false, "CNIC is required"]
    },
    RefBy: {
        type: String,
        required: [true, "CNIC is required"]
    },
    MonthlyConsLimit: {
        type: Number,
        required: [true, "CNIC is required"]
    },
    NOY: {
        type: String,
        required: [true, "CNIC is required"]
    },
    EmpId: {
        type: Number,
        required: [true, "CNIC is required"]
    },
    IsStaff: {
        type: String,
        required: [true, "CNIC is required"]
    },
    CreateUser: '',
    ModifyUser:'',
    ModifyDate: {
        type: String,
        required: [true, "CNIC is required"]
    },
    createdAt: {
        type: Date,
        default: new Date()
    },

})

const Registeration = mongoose.model('Registeration', RegisSchema)
module.exports = Registeration