try{
    console.log(value);
    let age = 20;
    if(age>18){
        throw new ReferenceError("Age is greater than expectd.");
    }
}catch(error){
    console.log(error.name,"\n");
    console.log(error.message,"\n");
    console.log(error.stack,"\n");
}
console.log("Script is still running.");