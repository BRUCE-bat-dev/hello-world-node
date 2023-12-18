const http = require ('http');

const hostname = '127.0.0.1'; // localhost
const porta = 5500;

const server = http.createServer((req ,res )=>{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain'); 


    res.end('hello world') 
})

server.listen(5500, '127.0.0.1', () => {
    console.log(`Servidor rodando em http://${`127.0.0.1`}:${`5500`}/`);
  });