let num=Math.floor((Math.random()*100)+1);
let n;
while(n!=num){
    n=prompt("Enter the number: ");
    if(n>num)
    console.log("Entered number is greater.");
    else if(n<num)
    console.log("Entered number is smaller.");
}
console.log(n,"is the correct number.");
