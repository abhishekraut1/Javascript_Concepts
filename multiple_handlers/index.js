let p = new Promise((resolve,reject)=>{
    setTimeout(() => {
        console.log("Promise resolved.");
        resolve(56);
    }, 3000);
});

p.then((value)=>{
    console.log("Hey bro!" + value);
});

p.then((value)=>{
    let a = prompt("Enter the value of a : ");
    let b = prompt("Enter the value of b : ");
    console.log(sum(a,b));
});

const sum = (a,b)=>{
    return Number.parseInt(a)+Number.parseInt(b);
};