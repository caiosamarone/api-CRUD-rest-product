const express = require('express')
const router = express.Router();
const controller = require('../controllers/product-controllers')

//create
 router.post('/',controller.post);
   
//put > att produto
 router.put('/:id',controller.put)

//delete
router.delete('/:id',controller.delete)

module.exports = router