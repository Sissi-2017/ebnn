
// var importObject = {
//   imports: {
//     imported_func: function(arg) {
//       console.log(arg);
//     }
//   }
// };

// onmessage = function(e) {
//   console.log('module received from main thread');
//   var mod = e.data;

//   WebAssembly.instantiate(mod, importObject).then(function(instance) {
//     instance.exports.exported_func();
//   });

//   var exports = WebAssembly.Module.exports(mod);
//   console.log(exports[0]);
// };



onmessage = function(e) {
  
  loadWebAssembly('simple_interface_Pro.wasm')
      .then(instance => {
        const computeFake = instance.exports._computeFake
        
        var image = new ArrayBuffer(784);
        var i;
        for(i = 0; i < 28*28; ++i)
        {
            image.push(i);
        }
        
        var workerResult = computeFake();            //computeFake() 结果的输出形式？？？？？
        
        for(i = 0; i < 28*28; ++i)
        {
            postMessage(workerResult[i]);
        }
            
   
        //console.log('Number =', computeFake())
      }
  
};




 
    
