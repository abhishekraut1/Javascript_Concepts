try{
    console.log(value);
}catch(error){
    // console.log(io);
    console.log("Error Occured!");
}
// code in finally block will always execute
finally{
    console.log("I will always execute 1");
}

const fun = ()=>{
    try{
        console.log(value);
        return;

    }catch(error){
        console.log("Error Occured!");
    }
    finally{
        console.log("I will always execute 2");
    }
}

fun();