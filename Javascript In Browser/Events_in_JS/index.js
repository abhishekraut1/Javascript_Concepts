let b1 = document.getElementById('btn1')
b1.onclick=function(){
    alert("clicked on button 1")
}


//addEventListener()
let b2 = document.getElementById("btn2")

let handler1 =(e)=>{
    console.log(e); 
    console.log(e.type); //Event type
    console.log(e.currentTarget); //Element that handled the event
    console.log(e.clientX); //Coordinates of the cursor
    alert("clicked on button 2 x");
}
let handler2 =(e)=>{
    alert("clicked on button 2 y");
}

b2.addEventListener("click",handler1)
b2.addEventListener("click",handler2)

// removeEventListener()
// b2.removeEventListener("click",handler2) // It will remove handler2 from click event
