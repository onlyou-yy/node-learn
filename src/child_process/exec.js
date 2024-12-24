let exec = require("child_process").exec;

let ls = exec('ls',(err,stdout,stderr)=>{
  if(err){
    console.log(err.stack);
    console.log('error code'+err.code);
  }
  console.log("child process stdout",stdout);
})