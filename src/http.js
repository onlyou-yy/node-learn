let http = require("http");
let url = require("url");

let server = http.createServer((req,res)=>{
  req.on("data",chunk=>{
    console.log(chunk);
  })
  req.on("end",()=>{
    console.log("end");
  })

  let data = url.parse(req.url,true);
  console.log("data",data);
  res.write("<h1>hello world</h1>");
  res.end("<h1>response end</h1>");
})

server.on("connect",(req,res)=>{
  console.log("server connect");
  res.write("<h1>connect</h1>");
})

server.listen(8000,()=>{
  console.log("servser run in: http://localhost:8000");
})