const express = require("express");
const router = express.Router();
const Registeration = require("../../models/register.js");
const dotenv = require('dotenv')
dotenv.config();


router.post('/add', async (req,res)=>{
    let user = req.body;
    console.log('....', user);
    try {
        const register = await Registeration.create(user)
        res.json({
            success: true,
            status: 201,
            dbid: register._id,
            data: register
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