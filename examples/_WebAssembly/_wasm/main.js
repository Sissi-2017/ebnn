
var result = new ArrayBuffer(784);

if (window.Worker) { // Check if Browser supports the Worker api.

      var worker = new Worker('worker.js');
	
      //不传参数给worker	
      //       worker.postMessage({
      //            data: WemAssembly.Module(wasmCode);
      //       });


      //Message received from worker
      //computeFake的功能：打印784个数？？？？？？？？？？？？

      for(i = 0; i < 28*28; ++i)
      {	
            myWorker.onmessage = function(e) {
                result.push(e.data[i]);                         //data的形式？？？？？
            }
      }

      console.log('Number =', result);             //computeFake的返回形式？？？？？
		
}



