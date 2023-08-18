// (3)
document.getElementById("twitter").addEventListener("click",()=>{
    window.location = "https://twitter.com";
});

document.getElementById("linkedin").addEventListener("click",()=>{
    window.location = "https://linkedin.com";
});

// (4)
setInterval(async ()=>{
    document.getElementById("bulb1").classList.toggle("bulb");
},300)