try{
    console.log(value);
}catch{
    console.log("Error 1 Occured.");
}

// try catch works Synchronously hence below will not handle error 
try{
    setTimeout(()=>{
        console.log(value);
    },5000);
}catch{
    console.log("Error 2 Occured.");
}