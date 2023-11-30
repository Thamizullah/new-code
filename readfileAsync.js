const {readFile,writeFile} = require('fs')

const data1 = readFile('data1.txt','utf8', (error,data1)=>{
            if(error)
            console.log(error)
            console.log(data1)


const  data2 = readFile('data2.txt','utf8',(error,data2)=>{
    if(error)
    console.log(error)
console.log(data2)

 
writeFile('dataAsync.txt', `${data1} ${data2}`,{flag:'a'}, (error)=>{
    if(error)
    console.log(error)
});
});
});

console.log('This coding is completed')