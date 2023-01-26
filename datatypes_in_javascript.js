// Primitive Datatypes
// nn bb ss u
let a=90 // number
let b=null // null 
let c=true // boolean
let d=BigInt("63844") // bigint
let e="Abhi" // string
let f=Symbol("I am a symbol") // symbol
let g=undefined // undefined
let h // undefined
console.log(a,"\n",b,"\n",c,"\n",d,"\n",e,"\n",f,"\n",g,"\n",h);
console.log(typeof f)
let i=BigInt("789") + BigInt("100")
console.log(i,"\n")

// Non-Primitive Data Type - Objects in JS
const item = {
    kushal:90,
    pawan:true,
    gopal:"Jalgaon"
}

console.log(item.kushal)
console.log(item['pawan'])
console.log(item["gopal"])