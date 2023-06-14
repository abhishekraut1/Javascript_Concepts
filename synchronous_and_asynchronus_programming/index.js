//(1) Synchronous program
// let a = Number.parseInt( prompt("Enter the value of a: ") )
// let b = Number.parseInt( prompt("Enter the value of b: ") )
// console.log("Sum of a and b is : " + (a+b));

//(2) Asynchronous program
console.log("Start");

setTimeout(()=>{
    console.log("Hey I am good");
},3000);

console.log("End");