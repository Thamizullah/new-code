const http=require('http')
const server=http.createServer(function(request,response){
    if(request.url=='//')  return responseslash(request,response)
   
})

function responseslash(request,response){
    response.end('hello world on universe')
}



console.log('hello hi')
server.listen(8080) //start the server