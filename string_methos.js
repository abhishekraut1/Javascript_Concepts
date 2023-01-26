let str = "Abhishek";
console.log(str.length);
console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str.slice(2,4));
console.log(str.slice(3));
console.log("1 - ",str.replace("sh","br"));
console.log(str); // strings are immutable
let str2="Raut";
console.log(str.concat(" My name is ",str2));
console.log(str);
let a="  abc   ";
console.log(a)
console.log(a.trim()) //removes spaces for beggining and ending

console.log("djd\"".length);
let s="I am CSE student.";
let word="de";
console.log(`${word} ${s.includes(word) ? "is " : " is not "}present in given str.`);
console.log(s.endsWith("nt."));
console.log(s.startsWith("I"));
console.log(s.indexOf("CSE"));

let io = Number.parseInt(34.90)
let po = Number.parseFloat(34.90)
console.log(io);
console.log(po);