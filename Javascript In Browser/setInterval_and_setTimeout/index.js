// setTimeout

// setTimeout(function(){
//     alert("HI! Bro")
// },3000)

let sum=(a,b,c)=>{
    document.write(a+b+c)
    console.log(a+b+c);
}
// let timerId = setTimeout(sum,2000,3,4,5)
// clearTimeout(timerId) --> // cancel the setTimeout() execution

// setInterval
let timerId = setInterval(sum,2000,2,2,2)
// clearInterval(timerId)  --> // cancel the setInterval() execution