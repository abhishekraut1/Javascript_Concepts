// An IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined.
let p = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(100);
        }, 3000);
    })
}

// IIFE prevents accessing variables within the IIFE idiom as well as polluting the global scope.
(async()=>{
    let a = await p();
    console.log(a);

    let b = await p();
    console.log(b);

    let c = await p();
    console.log(c);
})()