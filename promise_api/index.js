let p1 = new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve("Value 1")
        // reject(new Error("Error occured"))
    }, 1000);
});

let p2 = new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve("Value 2")
    }, 1000);
});

let p3 = new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve("Value 3")
    }, 1000);
});

// let promise_all = Promise.all([p1,p2,p3]);// --> all promises should be resolved.
// let promise_all = Promise.allSettled([p1,p2,p3]); //--> can be execute if promises are rejected
// let promise_all = Promise.race([p1,p2,p3]); // ---> prints the value of firstly fulfilled or rejected promise
// let promise_all = Promise.any([p1,p2,p3]); // ---> prints the value of firstl y fulfilled and omitts rejected promises.
// let promise_all = Promise.resolve(89); // ---> resolve promise
// let promise_all = Promise.reject(new Error("Error occured.")); // ---> reject promise
promise_all.then((value)=>{
    console.log(value);
})