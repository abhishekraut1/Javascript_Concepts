loadScript=(src,callback)=>{
    let script = document.createElement("script");
    script.src = src;

    script.onload = ()=>{
        console.log("Loaded script with SRC : " + src);
        callback(null,src);
    };

    script.onerror = () =>{
        console.log("Error loading script SRC : " + src);
        callback(new Error("SRC got some error"),src);
    }

    document.body.appendChild(script);
};

let callB = (error,src)=>{
    if(error){
        console.log(error);
        return;
    }
    console.log("I am callback function. " + src);
};

loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js",callB)