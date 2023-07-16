setInterval(() => {
    const d = new Date();
    let divs = document.getElementById("1").getElementsByTagName("div")
    divs[0].innerHTML = d.toDateString();
    divs[1].innerHTML = d.getHours()+":"+d.getMinutes()+":"+d.getSeconds();
}, 1000);
// divs[3].innerHTML = ;
// divs[4].innerHTML = ;

// console.log(divs[0],divs[1],divs[2],divs[3],divs[4]);