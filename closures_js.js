// A closure is a feature of JavaScript that allows inner functions to access the outer scope of a function. 
// Closure helps in binding a function to its outer boundary and is created automatically whenever a function 
// is created. A block is also treated as a scope since ES6.

function outer(){
    let x = 4;
    function inner(){
        console.log(x);
    }
    x = 5;
    return inner;
}

let a = outer();
a() // it will print x = 5, becuase it returns reference of varible and x is changed before returning inner()

function fun(){
    let x=()=>{
        let a=10;
        console.log(a);
        let y=()=>{
            // let a=20;
            console.log(a);
            let z=()=>{
                // let a=30;
                console.log(a);
            }
            z();
        }
        a = 100;
        y()
    }
    return x;
}

let b = fun();
b()
