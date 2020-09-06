const express = require('express')
const router = express.Router();

//create
 router.post('/', (req,res,next) => {
    res.status(201).send(req.body)  //pega o corpo da requisicao
})

//put > att produto
 router.put('/:id', (req,res,next) => {
    const id = req.params.id; //precisa ser igual ao param passado acima na url
    res.status(201).send(
        {
            id: id,
            item: req.body
        })  //pega o corpo da requisicao
})

//delete
router.delete('/:id', (req,res,next) => {
    const id = req.params.id;
    res.status(200).send(
        {
            id: id,
            item: req.body
        }) 
    
})

module.exports = router