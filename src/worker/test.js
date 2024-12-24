const {
  Worker, isMainThread, parentPort, workerData,setEnvironmentData,getEnvironmentData,
} = require('worker_threads');

if (isMainThread) {
  setEnvironmentData('Hi', 'Node.js!');
  const worker = new Worker(__filename);
  worker.on('message', message => console.log(message));
  worker.on('exit', (code) => {
    if (code !== 0){
      console.log(`Worker stopped with exit code ${code}`)
    }
  });
} else {
  console.log(getEnvironmentData('Hi'));
  parentPort.postMessage({data:"hello"});
}