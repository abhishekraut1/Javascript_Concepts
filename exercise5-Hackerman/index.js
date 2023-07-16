let arr = ["Initializing Hacking Program .....","Hacking Kushal's Username .....", "Kushal Username is Kushal1008 .....", "Connecting to Facebook  .....", "Hacked Successfully!"]

let i=0;
let fun = async()=>{ 
    return new Promise((resolve,reject)=>{
        let interval = setInterval(() => {
            let d = document.getElementById("container");
            let div = document.createElement("div");
            div.className = "my-2";
            div.innerHTML = arr[i];
            d.appendChild(div);
            if(i==arr.length-1){
                clearInterval(interval);
                resolve(true);
            }
            
            i++;
        }, 2000);
    })
}

let b = async()=>{
    let f = await fun();
    console.log(f);
}

b()