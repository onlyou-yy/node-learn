let net = require("net");
const client = net.createConnection({
  host:"localhost",
  port:4000,
})

client.on("connect",()=>{
  console.log("与 localhost:4000 建立连接成功")
  
  client.write("world");

  process.stdin.on("data",data=>{
    client.write(data);
  })
})


client.on("data",data=>{
 	console.log("来自服务端的信息",data.toString());
})