const ValidationContract = require('../validators/fluentValidator')
const repository = require('../repositories/customer-repository')

//create
exports.post = async(req,res,next) => {
    let contract = new ValidationContract()
    contract.hasMinLen(req.body.name, 3,'O nome deve conter no mínimo 3 caracteres')
    contract.isEmail(req.body.email,'O email inserido é invalido')
    contract.hasMinLen(req.body.password, 6,'A descrição deve conter no mínimo 6 caracteres')
    
   
    //se os dados forem inválidos
    if(!contract.isValid()){
        res.status(400).send(contract.errors()).end()
        return 
    }
        try {
        await repository.create(req.body)
        res.status(201).send({
            message: 'Cliente cadastrado com sucesso!'
        }) 
        }catch(e){
            res.status(500).send({
                message: 'Falha ao processar sua requisição'
            })
        }    
    }  