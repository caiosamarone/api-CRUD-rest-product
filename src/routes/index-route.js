const express = require('express')
const router = express.Router();

//getIndex
 router.get('/', (req,res,next) => {
    res.status(200).send({
        title: "Node Store API",
        version : "0.0.6"
    })
})

module.exports = router