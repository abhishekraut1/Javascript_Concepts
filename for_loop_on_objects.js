let marks={
    abhishek:90,
    pawan:91,
    rushi:92
}
// using for loop
for(let i=0;i<Object.keys(marks).length;i++)
console.log(Object.keys(marks)[i],"=",marks[Object.keys(marks)[i]]);

// using for in loop
for(let key in marks)
console.log(marks[key]);

// Can't use for of loop because marks is NOT ITERABLE
// for(let i of marks)
// console.log(i);