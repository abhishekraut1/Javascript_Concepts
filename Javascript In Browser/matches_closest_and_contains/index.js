let elem = document.getElementId("elem1")
console.log(elem);

console.log(elem.matches(".box")); // elem.matches(CSS) – To check if element matches the given CSS selector
console.log(elem.matches(".class")); //--> false

let sp1 = document.getElementId("sp1")
console.log(sp1.closest("#elem1"));  //elem.closest(CSS) – To look for the nearest ancestor that matches the given CSS-selector. The elem itself is also checked.

console.log(elem.contains(sp1));
console.log(sp1.contains(elem));