const mongoose = require('mongoose');


const WelSchema = mongoose.Schema({
    MRNO: {
        type: Number,
        // required: [true, ""]
    },
    TokenNo: {
        type: Number,
        // required: [true, "Token is required"]
    },
    WelfareDate:{
        type: Date, 
        // default: Date.now
    },
    Profession: {
        type: Number,
        // required: [true, "Profession is required"]
    },
    Fiqa: {
        type: String,
        // required: [true, "Fiqa is required"]
    },
    Education: {
        type: String,
        // required: [true, "Education is required"]
    },
    Cast: {
        type: String,
        // required: [true, "Cast is required"]
    },
    MonthlyIncome: {
        type: String,
        // required: [true, "MonthlyIncome is required"]
    },
    Guardian: {
        type: String,
        // required: [true, "Guardian is required"]
    },
    OtherInfo: {
        type: String,
        // required: [true, "OtherInfo is required"]
    },
    MaleKids: {
        type: String,
        // required: [true, "MaleKids is required"]
    },
    FemaleKids: {
        type: String,
        // required: [true, "FemaleKids is required"]
    },
    OtherKids: {
        type: String,
        // required: [true, "OtherKids is required"]
    },
    Brothers: {
        type: String,
        // required: [true, "Brothers is required"]
    },
    Sisters: {
        type: String,
        // required: [true, "Sisters is required"]
    },
    NoOFFamilyMembers: {
        type: String,
        // required: [true, "NoOFFamilyMembers is required"]
    },
    IsMarried: {
        type: Boolean,
        // required: [true, "IsMarried is required"]
    },
    IsAbleToPay: {
        type: Boolean,
        // required: [true, "IsAbleToPay is required"]
    },
    IsEarning: {
        type: Boolean,
        // required: [true, "IsEarning is required"]
    },
    HaveGold: {
        type: Boolean,
        // required: [true, "HaveGold is required"]
    },
    ReqName: {
        type: String,
        // required: [true, "ReqName is required"]
    },
    ReqPhone: {
        type: String,
        // required: [true, "ReqPhone is required"]
    },
    ReqRelationWithPatient: {
        type: String,
        // required: [true, "ReqRelationWithPatient is required"]
    },
    CreateUser: {
        type: String,
        // required: [true, "CreateUser is required"]
    },
    ModifyUser: {
        type: String,
        // required: [true, "ModifyUser is required"]
    },
  

})

const Welfare = mongoose.model('Welfare', WelSchema)
module.exports = Welfare