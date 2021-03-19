const mongoose = require('mongoose');

const RegisSchema = mongoose.Schema({
    MRNo:{
        type: String
    },
    TokenNo: {
            type: Number, 
            required:[true, "TokenNo is missing"] 
        },
        RegistrationDate: {
            type: Date,
            // default: new Date()
        },
        Name: {
            type: String, 
            required:[true, "Name is missing"] 
        },
        Father: {
            type: String, 
            required:[true, "Name is missing"] 

        },
        DOB: {
            type: Date,
        },
        Age: {
            type: Number, 
        },
        Gender: "",
        Religion: {
            type: String, 
        },
        District:{
            type: String, 
        },
        City: {
            type: String, 
        },
        Area: {
            type: String, 
        },
        HousNo: {
            type: String, 
       },
        Address: {
            type: String, 
        },
        CNIC: {
            type: Number, 
            // required:[true, "CNIC is missing"] 
        },
        Phone: {
            type: Number, 
            // required:[true, "Phone is missing"] 
        },
        OffPhone: {
            type: Number
        },
        Mobile: {
            type: Number
        },
        RefBy: {
            type: String, 
            // required:[true, "Ref is missing"] 
        },
        Remarks: {
            type: String, 
            // required:[true, "Remarks is missing"] 
        },
        IsRejected: {
            type: Boolean
        },
        IsZakat: {
            type: Boolean, 
            // required:[true, "IsRejected is missing"] 
        },
        IsPAFEmp: {
            type: Boolean
        },
        MonthlyConsLimit: {
            type: Number, 
            // required:[true, "MonthlyConsLimit is missing"] 
        },
        NOY: {
            type: Number, 
            // required:[true, "NOY is missing"] 
        },
        EmpID: {
            type: Number, 
            // required:[true, "EmpID is missing"] 
        },
        IsStaff:{
            type: Boolean
        },
    // MRNo: {
    //     type: Number,
    //     required: [true, "MRNO is required"]
    // },
    // TokenNo: {
    //     type: Number,
    //     required: [true, "Token is required"]
    // },
    // RegistrationDate:{
    //     type: Date, 
    //     default: Date.now
    // },
    // Name: {
    //     type: String,
    //     required: [true, "Name is required"]
    // },
    // Father: {
    //     type: String,
    //     required: [true, "fatherName is required"]
    // },
    // DOB: {
    //     type: Date, 
    //     default: Date.now
    // },
    // Age: {
    //     type: String,
    //     required: [true, "Age is required"]
    // },
    // Gender: {
    //     type: String,
    //     required: [true, "gender is required"]
    // },
    // Religion: {
    //     type: String,
    //     required: [true, "religion is required"]
    // },
    // District: {
    //     type: String,
    //     required: [true, "CNIC is required"]
    // },

    // City: {
    //     type: String,
    //     required: [true, "City is required"]
    // },
    // Area: {
    //     type: String,
    //     required: [true, "Area is required"]
    // },
    // HousNo: {
    //     type: String,
    //     required: [true, "HousNo is required"]
    // },
    // Address: {
    //     type: String,
    //     required: [true, "Address is required"]
    // },

    // Help: {
    //     type: String,
    //     required: [true, "help type is required"]
    // },
  
    // CNIC: {
    //     type: Number,
    //     required: [true, "CNIC is required"]
    // },
    // Phone: {
    //     type: Number,
    //     required: [true, "Phone is required"]
    // },
    // OffPhone: {
    //     type: String,
    //     required: [true, "OffPhone is required"]
    // },
    // Mobile: {
    //     type: String,
    //     required: [true, "Mobile is required"]
    // },
    // RefBy: {
    //     type: String,
    //     required: [true, "RefBy is required"]
    // },
    // Remarks: {
    //     type: String,
    //     required: [true, "Remarks is required"]
    // },
    // IsRejected: {
    //     type: Boolean,
    //     required: [false, "IsRejected is required"]
    // },
    // IsZakat: {
    //     type: Boolean,
    //     required: [true, "IsZakat is required"]
    // },
    // IsPAFEmp: {
    //     type:Boolean,
    //     required: [false, "IsPAFEmp is required"]
    // },
    // MonthlyConsLimit: {
    //     type: Number,
    //     required: [true, "MonthlyConsLimit is required"]
    // },
    // NOY: {
    //     type: String,
    //     required: [true, "NOY is required"]
    // },
    // EmpId: {
    //     type: Number,
    //     required: [true, "EmpId is required"]
    // },
    // IsStaff: {
    //     type: Boolean,
    //     required: [true, "IsStaff is required"]
    // },
    // CreateUser: '',
    // ModifyUser:'',
    // ModifyDate: {
    //     type: String,
    //     required: [true, "CreateUser is required"]
    // },
    // createdAt: {
    //     type: Date,
    //     default: new Date()
    // },

})

const Registeration = mongoose.model('Registeration', RegisSchema)
module.exports = Registeration