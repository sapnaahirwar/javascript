// let val = 45.01;
// let ans = Math.ceil(val);
// let ans1 = Math.floor(val);
// let ans2 = Math.round(45.5);
// console.log(ans)
// console.log(ans1)
// console.log(ans2)

// console.log(Math.pow(3,7));

// console.log(Math.SQRT2)
// console.log(Math.SQRT1_2);

// console.log(Math.abs(-99));
// console.log(Math.random())
let str = "0123456789";

let randomval = Math.random();

let aftermultiply = str.length * randomval;

let flooredval = Math.floor(aftermultiply);
let output = str.charAt(flooredval);
console.log(output);
