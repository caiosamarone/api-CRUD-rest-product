let errors = []

function ValidationContract() {
    errors = []
}
//campo é requirido
ValidationContract.prototype.isRequired = (value,message) => {
    if(!value || value.value <= 0)
        errors.push( { message : message})
}
//campo não pode ser menor que o minimo permitido
ValidationContract.prototype.hasMinLen = (value,min,message) => {
    if(!value || value.length < min)
        errors.push( { message : message})
}
//campo não pode ser maior que o maximo permitido
ValidationContract.prototype.hasMaxLen = (value,max,message) => {
    if(!value || value.length > max)
        errors.push( { message : message})
}
//tamanho fixo
ValidationContract.prototype.isFixedLen = (value,len,message) => {
    if(!value.length != len)
        errors.push( { message : message})
}


ValidationContract.prototype.isEmail = (value,message) => {
    var reg = new RegExp(/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/)
    if(!reg.test(value))
        errors.push( {message : message})
}

ValidationContract.prototype.errors = () => {
    return errors;
}

ValidationContract.prototype.clear = () => {
    erros = []
}
ValidationContract.prototype.isValid = () => {
    return errors.length == 0
}

module.exports = ValidationContract