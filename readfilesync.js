//using file we can call any methods in the module file system
//file.readFilySync
//const file=require('fs')

const {readFileSync,writeFileSync}=require('fs')
console.log('Reading the data from the file')
const data1 = readFileSync('data1.txt','utf8')
console.log(data1)
const data2 = readFileSync('data2.txt','utf8')
console.log('read operation completed')
writeFileSync('data.txt',`user details ${data1} ${data2}`)
console.log('done writing...')