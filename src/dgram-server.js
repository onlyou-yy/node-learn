let dgram = require("dgram");
let socket = dgram.createSocket("udp4");

socket.on("error",err => {
  console.log(err);
})

socket.on("message",(msg,info)=>{
  console.log(info);
  console.log("收到消息：",msg.toString());
})

socket.on("listening",()=>{
  let address = socket.address();
  console.log(`address:${address.address},port:${address.port}`)
})

socket.bind(41234);