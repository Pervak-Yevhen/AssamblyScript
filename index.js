const fs = require("fs");
const loader = require("@assemblyscript/loader/umd");
const imports = {
    env: {
        externalFunction: (a) => a + 10,
    },
    console: {
        logi: (a) => console.log('logi":', a),
        logf: (a) => console.log('logf":', a),
    }
};

const wasmModule = loader.instantiateSync(fs.readFileSync(__dirname + "/build/optimized.wasm"), imports);
module.exports = wasmModule.exports;
