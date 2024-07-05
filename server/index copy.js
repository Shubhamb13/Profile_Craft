const http=require('http');
const fs=require('fs')
const url=require('url')
 


const myserver = http.createServer((req,res)=>{
    if(req.url === "/favicon.ico")return res.end();
    const log=` ${Date.now()}:${req.method} ${req.url} new Req received\n`
    fs.appendFile("log.txt",log,(err,data)=>{
        const user=url.parse(req.url,true)
        // console.log(user)
        switch(user.pathname){
             
            case ('/'):
                if(req.method==="PUT"){res.end("Welcome Home");}
               break;
            case ('/about'):
                const name=user.query.myname
               res.end(`HI ${name}`);
               break;
            case('/signup'):
            if(req.method === "GET"){res.end("IT is Signup Form")}
            else if(req.method==="POST"){res.end("Success")}
            break;
            default:
               res.end("404 not found");    
            
        }
        
    })
    

});
myserver.listen(8000,()=>console.log("server started"))
