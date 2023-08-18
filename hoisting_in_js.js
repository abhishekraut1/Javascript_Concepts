console.log(a);
sum()
// 'var' variables, functions(not function expressions) shows Hoisting property.
var a = 89;
function sum(){
    console.log("Sum");
}

// Throws error
// console.log(b); 
// console.log(f); 
// console.log(f2); 
// console.log(f3); 
let b;
let f = function(){  //--> function expressions
    console.log('Fun');
}
const f2 = function(){
    console.log('Fun');
}
var f3 = function(){
    console.log('Fun');
}
