const http = require('http');

const server = http.createServer((request, response) => {
    const status = 200
    const mymeType = {'Content-Type': 'text/plain'}
    response.writeHead(status,mymeType)
    response.write('<h1>Hola mundo desde nodeJs<h1>')
    response.end()
})

server.listen(3000)
console.log('Servidor Corriendo en el puerto 3000')
