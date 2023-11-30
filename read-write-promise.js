const {readFile,writeFile} = require('fs').promises

// readFile('largefile.txt','utf-8',(error,data)=>{
//       if(error)
//       console.log(error)
//     console.log(data)
// });

const fetchData = async ()=> {
    try{
        const data1 = await readFile('data.txt','utf-8')
        const data2 = await readFile('02-example.js','utf-8')
        writeFile('large02.txt', `${data1} ${data2}`,{flag:'a'})

        console.log(data1)
        console.log(data2)
    }
    catch(error){
        console.log(error)
    }

}

fetchData();