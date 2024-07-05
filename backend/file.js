const fs=require('fs')
const os=require('os')
console.log(os.cpus().length)
// fs.writeFileSync('./text.txt','Hello World')

// fs.writeFile('./test.txt',"Using Async",(err)=>{}) 


    // fs.unlinkSync("./copy.txt")
    // fs.unlink('.test.txt',(err)=>{
    //     if(err)
    //         {
    //             console.log(err)
    //         }
    // })

    //   fs.cpSync("./text.txt","./copy.txt")

    // const result=fs.readFileSync('./context.txt',"utf-8")
    // console.log(result)


    // fs.readFile("./context.txt","utf-8",(err,res)=>{
    //     if(err){
    //         console.log(err)
    //     }
    //     else{
    //         console.log(res)
    //     }
    // })

    // fs.appendFileSync("./text.txt",`${Date.now()} Hey there\n`)

    // console.log(fs.statSync('./text.txt').isFile())

    //Blocking req
//     console.log("1")
//    const result= fs.readFileSync("./test.txt","utf-8")
//    console.log(result)
//    console.log("2")


//NON Blocking Element
// console.log("1")
// fs.readFile("./test.txt","utf-8",(err,res)=>{
//     if(err)
//         {
//             console.log(err)
//         }
//         else{
//             console.log(res)
//         }
// })
// console.log("2")
// console.log("3")