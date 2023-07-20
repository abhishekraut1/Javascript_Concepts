let a = {
    name:"Abhishek",
    fun:()=>{
        console.log("fun");
    },
    number:100
}
a.fun();

// Adding prototypes to object a
let p = {
    email: "email@gmail.com"
}

a.__proto__ = p;
console.log(a.email);

p.__proto__ = {
    fun2 : ()=>{console.log("fun2")}
}
console.log(a.fun2());