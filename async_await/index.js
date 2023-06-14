let fetchWeather = async ()=>{
    let delhiWeather = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("27 Deg")
        },2000)
    });
    
    let puneWeather = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("30 Deg")
        },5000)
    });

    console.log("Fetching Delhi Weather Please wait ...")
    let delhiW = await delhiWeather
    console.log("Fetched Delhi Weather: " + delhiW)

    console.log("Fetching Pune Weather Please wait ...")
    let puneW = await puneWeather;
    console.log("Fetched Pune Weather: " + puneW)

    return [delhiW,puneW];
}

// fetchWeather().then((value)=>{
//     console.log(value);
// });

// Below functions will not stop they will execute as it is
const cherry = async () => {
    console.log("Hey I am cherry and I am waiting ")
}

const main1 = async () => {
    console.log("Welcome to weather control room")
    // b will wait until a executes
    let a = await fetchWeather()
    let b = await cherry()

}
main1()


//Below code will not wait to execute above code
console.log("-------I am not waiting.-------");