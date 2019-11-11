//根据路径读取文件，并把内容返回
const fs = require('fs')
const path = require('path')

function getFileByPath(fpath, successCb, errCb){
    fs.readFile(fpath,'utf-8',(err,dataStr) => {
        if(err) return errCb(err)
        successCb(dataStr)
    })
}
var result = getFileByPath(path.join(__dirname,'./1.txt'),function(data){
    console.log(data+'成功')

},function(err) {
   console.log(err.message+"失败")
})

//回调地狱
//使用es6中的promise函数解决回调地狱的问题，但并不能减少代码量
getFileByPath(path.join(__dirname,'./1.txt'),function(data){
    console.log(data)
    getFileByPath(path.join(__dirname,'./2.txt'),function(data){
        console.log(data)
        getFileByPath(path.join(__dirname,'./3.txt'),function(data){
            console.log(data)
        })
    })
})
