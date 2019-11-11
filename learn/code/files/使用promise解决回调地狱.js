const fs =require('fs')

//.then指定回调函数的时候，成功的回调必须传，失败的回调可以不传
function getFlieByPath(fpath){
    return new Promise(function(resolve, reject){
        fs.readFile(fpath,'utf-8',(err,dataStr) => {
            if(err) return reject(err)
            resolve(dataStr)
        })
    })
}


// getFlieByPath('./code/files/1.txt')
// .then(function(data){
//     console.log("________"+data)
//     return getFlieByPath('./code/files/2.txt')
// })
// .then(function(data){
//     console.log("________"+data)
//     return getFlieByPath('./code/files/3.txt')
// })
// .then(function(data){
//     console.log("________"+data)
// })



//如果前面的promise执行失败，不想让后续的promise操作被终止，可以为每一个promise添加失败的回调
// getFlieByPath('./code/files/11.txt')
// .then(function(data){
//     console.log("________"+data)
//     return getFlieByPath('./code/files/2.txt')
// },
// function(err){
//     console.log("这是失败的结果"+err.message)
//     return getFlieByPath('./code/files/2.txt')
// })
// .then(function(data){
//     console.log("________"+data)
//     return getFlieByPath('./code/files/3.txt')
// })
// .then(function(data){
//     console.log("________"+data)
// })


//捕获异常，不能指定失败回调，一旦有报错即可被捕获并在catch中指定异常的处理方式，其他promise立刻停止
getFlieByPath('./code/files/11.txt')
.then(function(data){
    console.log("________"+data)
    return getFlieByPath('./code/files/2.txt')
})
.then(function(data){
    console.log("________"+data)
    return getFlieByPath('./code/files/3.txt')
})
.then(function(data){
    console.log("________"+data)
})
.catch(function(err){
    console.log("这是自己的处理方式"+err.message)
})
