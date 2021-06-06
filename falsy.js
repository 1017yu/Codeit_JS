let x = NaN;
console.log(x); // NaN
console.log(Boolean(x));  // false
console.log(typeof x);  //  number
console.log(typeof Boolean(x));  // boolean

let y = '';
console.log(y); // 
console.log(Boolean(y));  // false
console.log(typeof y);  //  string
console.log(typeof Boolean(y));  // boolean

let z = 0;
console.log(z); // 0
console.log(Boolean(z));  // false
console.log(typeof z);  //  number
console.log(typeof Boolean(z)); // boolean

// Boolean False로 형변환: '', 0, NaN