// The entry file of your WebAssembly module.
import { doSomething } from './env';
import { console } from './console';

export function add(a: i32, b: i32): i32 {
  const c = doSomething(a);

  console.logi(c);

  return c + b;
}

