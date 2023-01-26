let arr=[88,32,66];
console.log(arr);
console.log();
// array.map() --> method 
// it forms new array of same values as that of arr
// and it returns the resultant value after calculation
let a=arr.map((value,index,array)=> {
    console.log(value,index);
    return value+1;
});
console.log(a);
console.log();

// array.filter() --> method
// it return the value variable if satisfies the condition
let b=arr.filter((value,index,array)=>{
    return value>40;
})
console.log(b);
console.log();

// array.reduce() --> method
// it takes values of array directly
let arr2 = [9,3,5,4];

let c=arr2.reduce((prevValue,currValue,currIndex,array)=>{
    return prevValue - currValue;
})
// prevValue = previously returned value
// currValue = current value and starts from index 1
console.log(c);

c=arr2.reduce((prevValue,currValue,currIndex,array)=>{
    return prevValue + currValue;
})
console.log(c);