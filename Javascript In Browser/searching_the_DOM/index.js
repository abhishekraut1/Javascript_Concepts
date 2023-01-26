// getElementsByClassName
let ctitle = document.getElementsByClassName("card-title")[0]
console.log(ctitle);
ctitle.style.color="red";

// getElementById
let ctext = document.getElementById("card-text")
ctext.style.color="blue"
 


// CSS Selectors

// querySelectorAll
let ct = document.querySelectorAll(".card-title"); // select all elements with class "card-title"
console.log(ct);
ct[1].style.color="green"
ct[2].style.color="blue"

// querySelector
let cbody=document.querySelector(".card-body")  // select first element with class "card-body"
cbody.style.background="cyan"

let tag = document.querySelector(".card").getElementsByTagName("a") // gives all anchor tags
console.log(tag);

// getElementsByName
let nm = document.getElementsByName("search")
console.log(nm);

// console.dir()
let x = document.body.getElementsByTagName("span")[0] 
console.log(x);  // It will print span element
console.dir(x);  // It will print span class with all properties like Object

// nodeName
console.log(document.body.firstChild.nodeName);
console.log(document.body.firstElementChild.nodeName);
