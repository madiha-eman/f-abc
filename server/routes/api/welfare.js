const express = require("express");
const router = express.Router();
const Welfare = require("../../models/welfare.js");
const dotenv = require('dotenv')
dotenv.config();


router.post('/add', async (req,res)=>{
    let user = req.body;
    console.log('....', user);
    try {
        const welfare = await Welfare.create(user)
        res.json({
            success: true,
            status: 201,
            dbid: welfare._id,
            data: welfare
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