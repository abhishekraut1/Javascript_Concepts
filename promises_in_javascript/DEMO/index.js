let p1 = new Promise((resolve,reject)=>{
    // console.log("Promise is pending");
    setTimeout(() => {
        console.log("I am promise and I am resolved.");
        resolve(true);
    }, 4000);
});

// To get the errors
p1.then((value)=>{
    console.log(value);
});

let p2 = new Promise((resolve,reject)=>{
    // console.log("Promise is pending");
    setTimeout(() => {
        console.log("I am promise and I am rejected.");
    reject(new Error("I am an error"))
    }, 4000);
    
});

// To catch the errors
p2.catch((error)=>{
    console.log("some error occured in p2.");
})

// Both in one
p2.then((value)=>{
    console.log(value);
},(error)=>{
    console.log("some error occured in p2.");
})