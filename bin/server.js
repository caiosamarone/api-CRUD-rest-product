const app = require('../src/app')
const http = require('http')
const debug = require('debug')('nodestr:server')


const port = normalizePort(process.env.PORT || '3000')
app.set('port',port)

const server = http.createServer(app);       //criando servidor

server.listen(port)
server.on('error', onError) //dispara a funcao quando tiver algum erro
server.on('listening', onListening) //startar debug
console.log('Api rodando na porta: ' + port)

//funcao para normalizar a porta, e deixar ela dinamica caso a 3000 estiver em uso.
function normalizePort(val){
    const port = parseInt(val,10)

    if(isNaN(port)) 
    {
        return val
    }
    if(port >= 0) 
    {
        return port
    }
    return false
}

//funcao para detectar erros
function onError(error){
    if(error.syscall !== 'listen'){
        throw error;
    }

    const bind = typeof port === 'string' ?
        'Pipe ' + port : 
        'Port ' + port;

    switch(error.code){
        case 'EACESS':
            console.error(bind + ' requires elevated privileges')  //verifica se é um erro de permissao
            process.exit(1)
            break
        case 'EADDRINUSE':
            console.error(bind + 'is already in use')  //verifica se endereço esta em uso
            process.exit(1)
            break
        default:
            throw error
    }
}


//pega informações do servidor e starta o debug
function onListening() {
    const addr = server.address()
    const bind = typeof port === 'string' ?
        'pipe ' + addr : 
        'port ' + addr.port
    debug('Listening on ' + bind)
}