const assert = require("assert");
const myModule = require("..");
assert.strictEqual(myModule.add(1, 2), 13);
console.log("ok");
