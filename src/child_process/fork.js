let child_process = require("child_process");
let path = require("path");

let child = child_process.fork(path.resolve(__dirname,'./child.js'));
child.on("message",function(m){
  console.log("主进程接收到信息：",m);
})
child.send({hello:'world'});