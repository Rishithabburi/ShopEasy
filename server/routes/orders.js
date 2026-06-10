const express = require("express");

const router = express.Router();

router.post("/",(req,res)=>{

    res.json({

        message:"Order Placed Successfully"

    });

});

module.exports = router;