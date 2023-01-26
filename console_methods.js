console.log("log")
console.assert(78>90)
console.log(8>7)
console.error("Error")
console.info("info")
console.warn("This is warning")

let obj={a:90,b:88,c:23}
console.table(obj)

console.time("for_loop");
for(let i=0;i<10;i++){
    console.log(i);
}
console.timeEnd("for_loop");