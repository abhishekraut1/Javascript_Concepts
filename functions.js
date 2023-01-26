// Fuction Declaration (old method)
function add(a, b) {
    return a + b;
}
// Function Expression
const add2 = function() {
    console.log("hi");
}
// Arrow Function   (new method (Preferred))
const mul = (a, b) => {
    return a * b;
}
const mul2 = () => {
    console.log("bye");
}

let a = 4;
let b = 8;
console.log(add(a, b));
add2(a, b);
console.log(" ");
console.log(mul(a, b));
mul2(a, b);
console.log(Math.round(5 / 3));