const fs = require('fs');

const wasmModule  = fs.readFileSync('./empty-module.wasm');


WebAssembly.instantiate(new Uint8Array(wasmModule))
    .then((res) => {
        console.log('==> ', res.instance.exports.square(10));
    })

