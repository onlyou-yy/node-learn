let cluster = require("cluster");
let http = require("http");
let cpuNum = require("os").cpus().length;

if(cluster.isMaster){
  for(let i = 0;i<cpuNum;i++){
    cluster.fork();
  }
  cluster.on("message",(worker,message)=>{
    console.log("worker process id",worker.process.pid);
    console.log("worker process message",message);
  })
}else{
  process.send("hello world")
}