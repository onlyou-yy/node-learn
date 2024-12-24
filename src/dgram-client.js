let dgram = require("dgram");
let socket = dgram.createSocket("udp4")

socket.send("你好",41234,"localhost",(err,bytes)=>{
  console.log(err,bytes);
  socket.close();
})