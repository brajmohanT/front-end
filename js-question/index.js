
import { checkType, deepClone } from "./solutions.js"


// console.log(checkType(9))
// console.log(checkType(""))
// console.log(checkType([])) // should return array
// console.log(checkType({}))
// console.log(checkType(checkType))
// console.log(checkType(99.9))
// console.log(checkType(1234567890123456789012345678901234567890n))
// console.log(checkType(null)) // should return null
// console.log(checkType(NaN))
// console.log(checkType(false))
// console.log(checkType(new Date()))//should return date

const originalObject = {
  a: 1,
  b: {
    c: 2
  }
};
const deepCopyObject = deepClone(originalObject);
deepCopyObject.b.c = 3;
console.log(originalObject.b.c); // Output: 2
console.log(deepCopyObject.b.c); // Output: 3