


var worker = new Worker('js/wasm-worker.js');
worker.postMessage({
  data: WemAssembly.Module(wasmCode);
});
