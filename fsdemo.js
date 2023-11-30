const http=require('http')
const server=http.createServer(function(request,response){
    if(request.url=='//')  return responseslash(request,response)
   
})
function responseslash(request,response){
const fs = require('fs')

// SYNCHRONOUS
// reading the content from the file modulesdemo.js and displaying it in the console.
// readFileSync will read the content synchronously
const data = fs.readFileSync('modulesdemo.js','utf8')


    console.log(data)
for(var i=0; i<100; i++)
console.log(i)
response.write(data)
response.end(data)
}
server.listen(7080)




// //ASYNCHRONOUS

// const data = fs.readFile('modulesdemo.js','utf-8',(error,data)=>{
//        if(error)
//        console.log(error)
//     console.log(data)
// })

// console.log(data)
// for(var i=0; i<100; i++)
// console.log(i)