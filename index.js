const os= require('os')
let res= os.platform()
console.log(res)

const my_math=require('./my_math')
res1=my_math.add(4,5)
console.log(res1)

const fs=require('fs')

/*
fs.writeFileSync('some.txt','hello word')
res2=fs.readFileSync('some.txt','utf-8')
console.log(res2)

fs.readFile('some.txt','hello word',(err,data)=>{
    fs.writeFile('some.txt','hello word',(err,data)=>{
        console.log('good job!')
    })
})
*/
/*fs.mkdir('text-files',(err,data)=>{
    fs.writeFile('./text-files/some1.txt','Hello Word',(err,data)=>{
        fs.readFile('./text-files/some1.txt','utf-8',(err,data)=>{
            console.log('good work, mean')
        })
    })
})*/
/*fs.mkdir('test1',(err,data)=>{
 fs.writeFile('./test1/test1.txt','Hello',()=>{})})*/
/*fs.unlink('./test1/test1.txt',()=>{
 fs.rmdir('./test1',()=>{})
})*/


