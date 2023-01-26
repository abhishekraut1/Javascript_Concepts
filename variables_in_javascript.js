//var is very less use  in ES6 
// var,let and const can store any type data
var a = 1 //it is globally accessible
var a = 90 //it can be initialised many times
let b = 44 //its scope is block specific
let c = 78.99
let d
d='i'
let e = "Abhi"
// const a not allowed
const f="new" // f has constant value "new" and it cannot be changed further
console.log(a)
console.log(b)
console.log(c)
console.log(d)
console.log(e)
console.log()
{
    let a = "hi"
    console.log(a)
}
console.log()
console.log(a)
e = 0 // we can update variable e but not redeclaire
console.log()
console.log(e)