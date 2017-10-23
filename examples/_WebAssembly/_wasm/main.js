


var worker = new Worker('js/wasm-worker.js');
worker.postMessage({
  data: WemAssembly.Module(wasmCode);
});


//computeFake的功能：打印784个数？？？？？？？？？？？？

var result = new ArrayBuffer(784);

myWorker.onmessage = function(e) {
	
  for(i = 0; i < 28*28; ++i)
  {
     result.push(e.data);                         //data可否设为一个数组？？？？            
     //console.log('Message received from worker');
  }
     
}

console.log('Number =', result);             //computeFake的返回形式？？？？？



