let a = document.body.getElementsByTagName("nav")[0].firstElementChild
a.style.color = "red"

let obj = document.body.getElementsByTagName("li")
console.log(obj);
Array.from(obj).forEach(element => {  // Array.from() creates array from an iterable object
    element.style.background = "pink"
})