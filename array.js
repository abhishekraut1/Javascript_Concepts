let arr = [1, 4, 6, "me", 8, 55];

arr[1] = "odd";
arr[3] = 100;
arr.push(200);
console.log(arr);

// array methods --> basic
//(1)arr.length
console.log(arr.length);
let a = [3, 6, 88, 2, 5, 23];

//(2) toString()
let b = a.toString();
console.log(b, typeof b);
console.log(b);

//(3) join()
let c = a.join("()");
console.log(c);

//(4) 
a.push(200); // returns length of updated array
a.pop(); // returns poped element from last
console.log(a);

// (5)
a.unshift(77); //adds element at beginning & returns length
console.log(a);

//(6)
a.shift(); // remove element from beginning & returns removed element
console.log(a);
console.log();

// array methods 
let marks = [37, 500, 230, 7, 54, 100];

// (7)
// delete marks[2]; // delete item but not decrease the length of array
// console.log(marks);
// console.log(marks.length);

let newArr = marks.concat(a,a,a,a,a);
console.log("1--",newArr);

marks.sort(); // sort by alphabetical order
console.log("2--",marks);

let compare = (a, b) => {
    return a-b; // increasing order
}

// (8)
marks.sort(compare) // here we can put any function to sorting on function's basis
console.log("3--",marks);

let compare2 = (a, b) => {
    return b - a; // decreasing order
}
marks.sort(compare2)
console.log(marks);
console.log();

let brr = [8, 3, 0, 82, 1, 35];
// (9)
// brr.reverse();
// console.log(brr);

//(10) splice()
brr.splice(2, 3, 91, 92, 93); // start from index 2 : remove 3 elements and insert 91,92,93
                                // returns removed elements
console.log(brr);
//(11) slice
let crr = [23,15,88,45,6,90];
console.log(crr.slice(3)); // does not changes original array
console.log(crr.slice(3,5)); // does not changes original array
console.log(crr);