//child.js
process.on("message",m=>{
  console.log("接收到来自主进程的信息：",m);
})
process.send({foo:'bar'});