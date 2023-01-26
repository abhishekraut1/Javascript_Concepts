let sp1 = document.getElementById("sp1")

console.log(sp1.innerHTML);
// sp1.innerHTML="Hello

console.log(sp1.outerHTML);
// sp1.outerHTML="<i>i am italic</i>"

//.data
console.log(document.body.childNodes[0].data);
console.log(document.body.childNodes[0].nodeValue);

//.textContent   --> print text content
console.log(document.body.textContent); 

// .hidden
// document.body.getElementsByTagName("div")[1].hidden=false