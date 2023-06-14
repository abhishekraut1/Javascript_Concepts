//1)
let a="string"
let b=3;
let c=a+b
console.log(c)
console.log();


// 2)
console.log(typeof c)
console.log();

//3)
const a1 = {
    myname:"Abhi",
    section:'C'
}
// a1=89; not valid

//4)
let a2 = {
    myname:"Abhi",
    section:'C'
}
console.log("method 1 " + a1['myname']);  // method 1
console.log("method 2 " + a1.section); // method 2
console.log();
// a2=89; // we can assign any value to let object
console.log(a2);
console.log();
a1['branch']="CSE"
a2['branch']="CSE"
console.log(a1.branch);
console.log();
console.log(a1);
console.log();
console.log(a2);






