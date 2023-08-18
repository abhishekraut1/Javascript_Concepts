//IMP
const roll={
    abhi:30,
    arpit:38,
    sakib:29
};
// 1) for loop
for(let i=0;i<Object.keys(roll).length;i++){
    console.log("Roll no of is "+Object.keys(roll)[i]+" "+roll[Object.keys(roll)[i]]);
}
console.log("");
// 2) for in loop
for(let marks in roll){
    console.log("Roll no of is "+marks+" "+roll[marks]);
}
let op=89/45;
console.log(op);
