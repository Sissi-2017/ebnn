// function loadWebAssembly(filename, imports = {}) {
//   return fetch(filename)
//     .then(response => response.arrayBuffer())
//     .then(buffer => WebAssembly.compile(buffer))
//     .then(module => {
//       imports.env = imports.env || {}
//       Object.assign(imports.env, {
//         memoryBase: 0,
//         tableBase: 0,
//         memory: new WebAssembly.Memory({ initial: 256, maximum: 256 }),
//         table: new WebAssembly.Table({ initial: 0, maximum: 0, element: 'anyfunc' })
//       })
//       return  WebAssembly.Instantiate(module,imports)
//     })
// }




function fetchAndInstantiate(url, importObject) {
  return fetch(url).then(response =>
    response.arrayBuffer()
  ).then(bytes =>
    WebAssembly.instantiate(bytes, importObject)
  ).then(module =>{
      imports.env = imports.env || {}

      // 开辟内存空间
      imports.env.memoryBase = imports.env.memoryBase || 0
      if (!imports.env.memory) {
        imports.env.memory = new WebAssembly.Memory({ initial: 256 })
      }

      // 创建变量映射表
      imports.env.tableBase = imports.env.tableBase || 0
      if (!imports.env.table) {
        // 在 MVP 版本中 element 只能是 "anyfunc"
        imports.env.table = new WebAssembly.Table({ initial: 0, element: 'anyfunc' })
      }

      // 创建 WebAssembly 实例
      //return  results.instance
  });
}


function loadJS (url, imports = {}) {
  return fetch(url)
    .then(response => response.text())
    .then(code => new Function('imports', `return (${code})()`))
    .then(factory => ({ exports: factory(imports) }))
}
