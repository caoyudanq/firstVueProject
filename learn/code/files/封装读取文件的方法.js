//根据路径读取文件，并把内容返回
const fs = require('fs')
const path = require('path')
// fs.readFile(path.join(__dirname,'./1.txt'),'utf-8',(err,dataStr) => {
//     if(err) throw err
// })

//初衷：给定文件路径，返回读取到的内容
//callback里面有两个参数，第一个参数是失败的结果，第二个是成功的结果
//同时规定，如果成功后返回的结果位于第二个位置，此时第一个位置由于没有出错防止null
//如果失败，第一个位置为err对象，第二个参数为undefined
function getFileByPath(fpath,callback){
    fs.readFile(fpath,'utf-8',(err,dataStr) => {
        if(err) return callback(err)
        callback(null, dataStr)
    })
}
var result = getFileByPath(path.join(__dirname,'./1.txt'),(err, dataStr) => {
    if(err) return console.log(err.message)
    console.log(dataStr)
})
