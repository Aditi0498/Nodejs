const http = require("http");     

const PORT = 8081;
 
const toDoList = ["Hello Everyone", "g'evening all"]

http.createServer((req, res)=> {
   const  {method, url} = req;
//    console.log(method, url)

    if(url === "/todos"){
        if(method === "GET"){
            res.writeHead(200);
            res.write(toDoList.toString());
        }else if (method === "POST") {
            let body = "";
            req.on('error', (err)=>{
                console.error(err)
            }).on('data', (chunk)=>{
                body += chunk;
                // console.log("chunk: ",chunk)
            }).on('end', ()=>{
                body = JSON.parse(body)
                // console.log("body: ", body)
                 let newToDo = toDoList;
                 newToDo.push(body.item);
                 console.log(newToDo)
            })

        }else if (method === "DELETE"){
            let body='';
            req.on('error', (err)=>{
                console.error(err)
            }).on('data', (chunk)=>{
                body += chunk
            })
            .on('end',()=>{
                body = JSON.parse(body);
                let deleteThis = body.item;

                // for(let i=0; i<toDoList.length; i++){
                //     if(toDoList[i]===deleteThis){
                //        toDoList.splice(i,1);
                //        break;
                //     }
                // }

                toDoList.find((each,i)=>{
                    if(each === deleteThis){
                        toDoList.splice(i, 1)
                    }
                })
            })
        }
        else{
            res.writeHead(501);
        }
    } else if (url === "/"){

    }else{
        res.writeHead(200);
        res.write("hello aditi");
    }
   res.end();
   
})
.listen(PORT,()=>{
    console.log(`NodeJs Server is Up and Running Successfully on Port ${PORT}`)
})

// http://localhost:8081