/* 
In JavaScript, a primitive (primitive value, primitive data type) is data that is not an object and has no methods or properties. There are 7 primitive data types:

string
number
bigint
boolean
undefined
symbol
null
 
Link: https://developer.mozilla.org/en-US/docs/Glossary/Primitive
*/
// This method will return the type of value passed as param 

//NaN behaviour: it is Unequal to Itself: Uniquely in JavaScript, NaN does not equal any other value, including itself. NaN === NaN always returns false. This behavior is a direct result of the IEEE 754 standard.

/* 
TASK-1: Write a function to determine the exact JavaScript type of any value (distinguish array, null, object, function, date, etc.) without using external libraries.
*/
export function checkType(value){
    let typeYhiHai = typeof(value)

    if(typeYhiHai=='object'){
        // type of array is also object. : check for array
        if(Array.isArray(value))
            return 'Array'

        // type of null is also object : check for null
        if(value===null)
            return 'null'

        if(value instanceof Date)
            return 'Date'

        //FIXME: Valid date check. for example: if u are using Date("Hello")- this will return 'Date' 

    }

    if(typeYhiHai==='number'){
        // NaN is type of Number, and it can not be comapred to anything.
        // NaN===NaN always returns false. 
        if(value!==value)
            return "NaN"

        //OR

        if(Number.isNaN(value))
            return "NaN"
    }


    return typeYhiHai
}


/* 
TASK:2 :: Implement a deep-clone function for objects and arrays that does not use structuredClone or JSON methods.
*/

/* Go for nested object example of shallow copy vs Deep copy. */
  
export const deepClone = (obj)=>{
  if(obj===null || typeof obj !=='object'){
    return obj;
  }
  
  if(Array.isArray(obj)){
    const copy = []
    for (let i = 0; i < obj.length;i++){
      copy[i] = deepClone(obj[i])
    }
    return copy
  }
  
  const copy = {}
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)){
      copy[key] = deepClone(obj[key])
    }
  }
  return copy
}
// INFO: WHat is prototype in JS. and what this thing does Object.prototype.hasOwnProperty.call(obj, key). Recursively traversing complext objects.


// TASK: 3 : Convert all object keys (including nested ones) to camelCase using JavaScript string utilities.

const camelCaseString = (str)=>{
  return str
    .replace(/[-_ ]+([a-zA-Z])/g, (_, chr) => chr.toUpperCase())
          .replace(/^[A-Z]/, chr => chr.toLowerCase());
}

export const camelCaseObjKeys = (obj)=>{
  if(Array.isArray(obj)){
    return obj.map((item)=>camelCaseObjKeys(item))
  }
  
  if(obj!==null && typeof(obj)==='object'){
    return Object.fromEntries(
      Object.entries(obj).map(([key,value])=>
        [camelCaseString(key),camelCaseObjKeys(value)]
      )
    )
  }
  
  return obj;
}

//INFO: read about the object.entries(obj) & object.fromEntries(arr), read about map. whats happening in line 102/3


// Task: 4: Flatten a deeply nested object into a single-level object using dot-notation paths (a.b.c = value).




// "use client";

import { useEffect } from "react";

export default function LazyGTM() {
  useEffect(() => {
    let loaded = false;

    function loadGTM() {
      if (loaded) return;
      loaded = true;

      // Create dataLayer if missing
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: "gtm.js",
        "gtm.start": Date.now(),
      });

      const script = document.createElement("script");
      script.async = true;
      script.src = "https://www.googletagmanager.com/gtm.js?id=GTM-XXXXXXX";
      document.head.appendChild(script);
    }

    // 1. Load when browser is idle
    if ("requestIdleCallback" in window) {
      requestIdleCallback(loadGTM, { timeout: 2000 });
    } else {
      setTimeout(loadGTM, 1500);
    }

    // 2. Load on first user interaction
    ["scroll", "mousemove", "touchstart", "keydown", "click"].forEach((evt) => {
      window.addEventListener(evt, loadGTM, { once: true, passive: true });
    });
  }, []);

  return null;
}

// After chalideren in app.js ::  