let arr=['s','w','g']
let play=true
while(play){
    let player = prompt("Enter the character between s,w or g.")
    let comp = arr[Math.floor(Math.random() * arr.length)]

    if(player==='s' && comp==='w' || player==='w' && comp==='g' || player==='g' && comp==='s'){
        alert("You Win. --> "+player+" vs "+comp)
    }
    else if(player==comp){
        alert("There is Tie. --> "+player+" vs "+comp)
    }else{
        alert("You Loose. --> "+player+" vs "+comp)
    }
    play=confirm("Want to Play again.")
}