
//create
exports.post = (req,res,next) => {
    res.status(201).send(req.body)  
}  

//put > att produto
exports.put = (req,res,next) => {
    const id = req.params.id; //precisa ser igual ao param passado acima na url
    res.status(201).send(
        {
            id: id,
            item: req.body
        })  //pega o corpo da requisicao
}


//delete
exports.delete = (req,res,next) => {
    const id = req.params.id;
    res.status(200).send(
        {
            id: id,
            item: req.body
        }) 
    
}
