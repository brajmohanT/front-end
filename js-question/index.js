
import { camelCaseObjKeys, checkType, deepClone } from "./solutions.js"


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

// const originalObject = {
//   a: 1,
//   b: {
//     c: 2
//   }
// };
// const deepCopyObject = deepClone(originalObject);
// deepCopyObject.b.c = 3;
// console.log(originalObject.b.c); // Output: 2
// console.log(deepCopyObject.b.c); // Output: 3
// 

// const obj2 = {
//   user_id: 100,
//   account_info: {
//     ACCOUNT_TYPE: "premium",
//     Created_At: "2024-01-10",
//     "last-login-time": "10:30 PM"
//   }
// };


// const obj7 = {
//   status_code: 200,
//   "response-data": {
//     USER_LIST: [
//       { user_id: 1, user_name: "Alice" },
//       { user_id: 2, user_name: "Bob" }
//     ],
//     pagination_info: {
//       current_page: 1,
//       total_pages: 3
//     }
//   }
// };


// console.log(JSON.stringify(camelCaseObjKeys(obj7)))
// 
