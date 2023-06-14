// 1) loadScript() Function
// const loadScript = async (src)=>{
//     return new Promise((resolve,reject)=>{
//         script = document.createElement("script");
//         script.src = src;
//         script.onload = ()=>{
//             resolve(src + " Loaded Successfully.")
//         }
//         document.head.append(script);
//     })
// };

// let main2 = async ()=>{
//     console.log(new Date().getMilliseconds());
//     let a = await loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js")
//     console.log(a)
//     console.log(new Date().getMilliseconds());
// }

// main2()

// 2)

// let a = loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js")
// a.then((value)=>{
//     console.log(value);
// }).catch((error)=>{
//     console.log(error);
// });

// 3)
const p = async()=>{
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject(new Error("error occured"));
    },3000);
    })
};

const fun = async()=>{
    try{
        let c = await p();
        console.log(c);
    }catch(err){
        console.log("Error has been handled");
    }
}

fun();