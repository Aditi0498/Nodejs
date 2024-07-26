// importing the aaplication
const http = require("http");     

// server should be dedicated to a specific port number
const PORT = 8082;
 

//writehead is used to pass some status code, write is used to show response, respose end is used to release the response.

http.createServer((req, res)=> {
   res.writeHead(200,{"Content-Type": "text/html"});
   res.write("<h1>Hello World Everyone 123456 :-) </h1>");
   res.end();
})
.listen(PORT,()=>{
    console.log(`NodeJs Server is Up and Running Successfully on Port ${PORT}`)
})

// http://localhost:8082