// setTimeout --> (Run after given interval of time)
// setTimeout(function(){
//     alert("HI! Bro")
// },3000)

let sum=(a,b,c)=>{
    document.write(a+b+c)
    console.log(a+b+c);
}
// let timerId = setTimeout(sum,2000,10,20,30)
// clearTimeout(timerId) //--> /cancel the setTimeout() execution

// setInterval
// let timerId2 = setInterval(sum,2000,2,2,2)
// clearInterval(timerId)  --> // cancel the setInterval() execution

setInterval(async ()=>{
    document.getElementById("bulb1").classList.toggle("bulb");
},300)