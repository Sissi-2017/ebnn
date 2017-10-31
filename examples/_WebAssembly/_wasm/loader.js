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


function fetchAndInstantiate(url, importObject) {
  return fetch(url).then(response =>
    response.arrayBuffer()
  ).then(bytes =>
    WebAssembly.instantiate(bytes, importObject)
  ).then(result =>{
      results.instance
)}



function loadJS (url, imports = {}) {
  return fetch(url)
    .then(response => response.text())
    .then(code => new Function('imports', `return (${code})()`))
    .then(factory => ({ exports: factory(imports) }))
}
