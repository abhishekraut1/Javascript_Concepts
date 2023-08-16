// destructuring Array
let arr = [1,6,2,44,0];
let [a,b,c,d,e] = arr;
console.log(a,b,c,d,e);

let [f,,g,...rest] = arr;
console.log(f,g,rest);

// destructuring Object
let { h,i} = {h:40,i:50};
console.log(h,i);

let { j,...rest2} = {j:{b:90,q:100},k:50,l:70};
console.log(j,rest2);

// Spred Operator -> ...
// Converting array to object
let arr2 = [6,7,8];
let obj = {...arr2};
console.log(obj);

let sum = (x,y,z)=>{
    return x+y+z;
}
console.log(sum(...arr2));

// Overriding the object values
let info = {
    name: 'Abhishek',
    address: 'XYZ street',
    email: 'mail@email.com'
}
let v = {...info,name:'Ram'};
// let v = {name:'Ram',...info}; --> The values will not change by this.
console.log(v);