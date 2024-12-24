let net = require("net");
const server = net.createServer();
const clients = [];


server.on("connection",socket=>{
  console.log("建立连接成功");

  if(!clients.includes(socket)){
    socket.clientId = clients.length;
    clients.push(socket);
  }
  console.log("client count:",clients.length);

  socket.write("hello");

  socket.on("data",data=>{
    console.log("来自客户端的信息",data.toString())
  })

  socket.on("close",err=>{
    console.log("close");
  })
})

server.listen(4000,()=>{
  console.log("tcp servet run in: localhost:4000");
})