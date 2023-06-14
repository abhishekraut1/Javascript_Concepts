// let p1 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log("1st promise resolved in 2sec.");
//         resolve(56);
//     },2000)
// });

// p1.then((value)=>{
//     console.log(value);

//     let p2 = new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("2nd Promise.")
//         },2000)
//     });

//     return p2;
// }).then((value)=>{
//     console.log(value);
//     return 100;
// }).then((value)=>{
//     console.log(value);
// })

// loadScript function using Promises
const loadScript = (src)=>{
    return new Promise((resolve,reject)=>{
        let script = document.createElement("script");
        script.type = "text/javascript";
        script.src = src;
        document.body.appendChild(script);
        script.onload = (script)=>{
            resolve(78);
            // resolve("1st Script has been loaded.");
        }
        script.onerror = ()=>{
            reject(0);
        }
    });
};

let p1 = loadScript("https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/js/bootstrap.min.js");

p1.then((value)=>{
    console.log(value);

    return loadScript("https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/js/bootstrap.min.js");
}).then((value)=>{
    console.log("2nd script loaded.");
}).catch((error)=>{
    console.log("Some error occured while loading 2nd script. "+error);
})