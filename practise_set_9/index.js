// 1) loadScript() Function
const loadScript = async (src)=>{
    return new Promise((resolve,reject)=>{
        let script = document.createElement("script");
        script.src = src;
        script.onload = ()=>{
            resolve(src + " Loaded Successfully.")
        }
        document.head.append(script);
    })
};

// let main2 = async ()=>{
//     console.log(new Date().getMilliseconds());
//     let a = await loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js")
//     console.log(a)
//     console.log(new Date().getMilliseconds());
// }

// main2()

// 2)

// let a = loadScript("https://cdn.jsdelivr.net/=npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js")
// a.then((value)=>{
//     console.log(value);
// }).catch((error)=>{
//     console.log(error);
// });

// 3)
// const p = async()=>{
//     return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         reject(new Error("error occured"));
//     },3000);
//     })
// };

// const fun = async()=>{
//     try{
//         let c = await p();
//         console.log(c);
//     }catch(err){
//         console.log("Error has been handled");
//     }
// }

// fun();

// 3)
// let pro = async ()=>{
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             reject(new Error("promise is rejected."))
//         }, 2000);
//     })
// }

// let f = async ()=>{
//     try{
//         let c = await pro();
//         console.log(c);
//     }catch(err){
//         console.log("Error Handled Successfully!" + err);
//     }
// }
// f();

// 4)
const p1 = async()=>{ 
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve("p1 resolved.")
        }, 1000);
    })
}
const p2 = async()=>{ 
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve("p2 resolved.")
        }, 3000);
    })
}
const p3 = async()=>{ 
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve("p3 resolved.")
        }, 2000);
    })
}

let run1 = async()=>{ 
    console.time("run1");
    let a1 = p1();
    let a2 = p2();
    let a3 = p3();
    let a1a2a3 = await Promise.all([a1,a2,a3]);
    console.log(a1a2a3);
    console.timeEnd("run1");
};
run1();