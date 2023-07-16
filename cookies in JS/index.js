// set cookies
console.log(document.cookie);
document.cookie = "name1 = Abhishek"
document.cookie = "name2 = Raut"
console.log(document.cookie);
document.cookie = "name3=Achal; name4=Ashwini"; // ingore all after first key value pair

// encodeURIComponent
let key = prompt("enter key : ")
let value = prompt("enter value : ")
document.cookie = encodeURIComponent(key)+"="+encodeURIComponent(value);
console.log(decodeURIComponent());

