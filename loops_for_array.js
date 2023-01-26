let arr=[7,33,23,11,84,89];
// classical for loop
for(let i=0;i<arr.length;i++)
    console.log(arr[i]);
console.log();

// foreach
arr.forEach((value,index,array)=>{
    console.log(value,index,array);
})
console.log();

// for of
for(let item of arr)
    console.log(item);
console.log();

// for in
for(let i in arr)
    console.log(arr[i]);

// Array.from() --> convert to array
let str="Abhi";
let a=Array.from(str);
console.log(a , typeof a,typeof a[0]);