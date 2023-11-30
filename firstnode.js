console.log('hello makkala')
// console.log('global')

const path=require('path')

console.log('-------')
const os = require('os')
console.log(os.type())
console.log(os.version())
console.log(os.homedir())

console.log('-------')
console.log(__dirname)
console.log(__filename)

console.log('-------')
console.log(path.dirname(__filename))
console.log(path.basename(__filename))
console.log(path.extname(__filename))

console.log('-------')
console.log(path.parse(__filename))

console.log('-------')
// const math=require('./math')

const {add,sub,mul,div}=require('./math')


// console.log(math.add(8,8))
// console.log(math.sub(8,8))
// console.log(math.mul(8,8))
// console.log(math.div(8,8))


console.log(add(8,8))
console.log(sub(8,8))
console.log(mul(8,8))
console.log(div(8,8))