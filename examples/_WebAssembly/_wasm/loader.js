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
//       return new WebAssembly.Instance(module, imports)
//     })
// }



function loadWebAssembly (path) {
  return fetch(path)                   // 加载文件        
    .then(res => res.arrayBuffer())    // 转成 ArrayBuffer
    .then(WebAssembly.instantiate)     // 编译 + 实例化
    .then(mod => mod.instance)         // 提取生成都模块
}




function loadJS (url, imports = {}) {
  return fetch(url)
    .then(response => response.text())
    .then(code => new Function('imports', `return (${code})()`))
    .then(factory => ({ exports: factory(imports) }))
}
