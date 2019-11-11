//1.promise是构造函数，可以通过new创建实例
//2.promise有两个重要的函数：resolve成功时回调；reject:失败时回调
//3.在promise构造函数的prototype属性上，有一个.then方法。即pormise实例可通过.then访问该方法
//4.promise是一个异步操作，
//5.promise实例是异步操作，该操作只有两个状态：
//5.1 状态1：成功，在内部调用resolve回调函数
//5.2 状态2：失败，在内部调用reject回调函数
//5.3 无法通过return方法返回结果，只能通过 在内部 回调函数将结果返回给调用者
//6. 通过实例的.then方法 预先为该promise异步操作指定成功或失败的回调

//这里new出来的promise ，只是形式上的异步操作
// var promise = new Promise()

// var promise = new Promise(function(){
//     //这个function内部写的就是具体的异步操作
// })

const fs = require('fs')

//每当new promise实例时，会立即执行 异步操作中的代码，即执行构造函数参数中的function中的异步操作代码

// var promise = new Promise(function(){
//     fs.readFile('./code/files/2.txt','utf-8',(err,dataStr) => {
//         if(err) throw err
//         console.log(dataStr)
//     })
// })

// function getFlieByPath(fpath){
//     var promise = new Promise(function(resolve, reject){
//         fs.readFile(fpath,'utf-8',(err,dataStr) => {
//             if(err) return reject(err)
//             resolve(dataStr)
//         })
//     })
//     return promise
// }
// var p = getFlieByPath('./code/files/1.txt')
// p.then(function(data){
//     console.log("________"+data)
// },function(err){
//     console.log("________"+err.message)
// })

function getFlieByPath(fpath){
    return new Promise(function(resolve, reject){
        fs.readFile(fpath,'utf-8',(err,dataStr) => {
            if(err) return reject(err)
            resolve(dataStr)
        })
    })
}
getFlieByPath('./code/files/1.txt').then(function(data){
    console.log("________"+data)
},function(err){
    console.log("________"+err.message)
})