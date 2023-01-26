y=true
while(play){
    let player = prompt("Enter the character between s,w & g.")
    let comp = arr[Math.floor(Math.random() * arr.length)]

    if(player=='s' && comp=='w' || player=='w' && comp=='g' || player=='g' && comp=='s'){
        alert("You Win.")
    }
    else if(player==comp){
        alert("There is Tie.")
    }else{
        alert("You Loose.")
    }
    play=confirm("Want to Play again.")
}