// for loop
let i=90;
for(let i=0;i<8;i++){
    console.log(i);
}
console.log(i);

console.log();
let obj = {
    a:1,
    b:2,
    c:3
};

// for in loop
for(let i in obj){
    console.log(i," = ",obj[i]);
}
console.log();

// for of loop --> object must be iterable
for(let i of obj){
    console.log(i);
}
for(let i of "Abhishek"){
    console.log(i);
}