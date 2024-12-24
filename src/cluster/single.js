let http = require("http");

process.on("uncaughtException",err=>{
  console.log("发生错误",err)
})


http.createServer((req,res)=>{
  
  res.end("hello")
}).listen(3001)