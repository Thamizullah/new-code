const http = require('http')
let count=0;
const server = http.createServer((request,response)=>{
    response.end('Hello...')
})

server.on('connection',()=>{
    console.log('server connected')
})

server.on('request',()=>{
    count++;
    console.log('Request is received')
    console.log(`visitors ${count}`)
})

server.listen(3456);