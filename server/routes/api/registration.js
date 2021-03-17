const express = require("express");
const router = express.Router();
const Registeration = require("../../models/register.js");
const dotenv = require('dotenv')
dotenv.config();


router.post('/add', async (req,res)=>{
    console.log('....', req.body)
    try {
        const register = await Registeration.create(req.body)
        res.json({
            success: true,
            status: 201,
            dbid: register._id
        })

    } catch (error) {
        res.json({
            success: false,
            status: 400,
            error: error.message

        })

    }
})










module.exports = router