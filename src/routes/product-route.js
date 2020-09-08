const express = require('express')
const router = express.Router();
const controller = require('../controllers/product-controllers')

//create
 router.post('/',controller.post);
   
//put > att produto
 router.put('/:id',controller.put)

//delete
router.delete('/',controller.delete)

//get
router.get('/',controller.get)

//getBySlug
router.get('/:slug',controller.getBySlug)

//getById
router.get('/admin/:id',controller.getById)

//getBySlug
router.get('/tags/:tag',controller.getByTag)

module.exports = router