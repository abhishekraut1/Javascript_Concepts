// // localStorage.setItem()
// localStorage.setItem("name","Abhishek");
// let key = prompt("Enter key ")
// let value = prompt("Enter value ")
// localStorage.setItem(key,value);

// // localStorage.getItem()
// console.log(`The value at ${key} is ${localStorage.getItem(key)}.`);

// //  localStorage.removeItem()
// localStorage.removeItem("abc");

// // localStorage.clear()
// if(key === "0"){
//     localStorage.clear();
// }

// // localStorage.length --> property
// console.log(localStorage.length);

// //localStorage.key(index) --> key of key-value pair at index
// console.log(localStorage.key(0));

window.onstorage = (e)=>{
    alert("Changed!");
    console.log(e);
}