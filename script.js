const cells =document.querySelectorAll('.cell');
const result = document.getElementById('result');
const winner = document.getElementById('winner');
const restartButton = document.getElementById('restartButton');


let turn='X';
let isgameOver=false;
let count=0;


// console.log(cells);
// console.log(result);
// console.log(winner);




cells.forEach(e =>{
    e.addEventListener('click',()=>{
        if(e.innerText===''){
            count=count+1;
            console.log(count);
            e.innerHTML=turn;
            // console.log(e.innerHTML);
            turn=changeTurn();
            checkWinner();
            if(isgameOver){
                if(turn==='X') {
                    winner.innerText='O won';
                    result.style.display='flex';
                    console.log('O won');
                }
                else {
                    winner.innerText='X won';
                    result.style.display='flex';
                    console.log('X won');
                }
            }
            if(count===9 && (!isgameOver)){
                winner.innerText='Match Tied';
                result.style.display='flex';
                console.log('Match Tied'); 
            }
        }
    })
});

restartButton.addEventListener('click',()=>{
    resetGame();
})

function changeTurn(){
    if(turn==='X'){
        return 'O';
    }
    else{
        return 'X';
    }
}

function checkWinner(){
    if(cells[0].innerText!=='' && cells[0].innerText===cells[1].innerText && cells[1].innerText===cells[2].innerText){
        isgameOver=true;
    }
    if(cells[3].innerText!=='' && cells[3].innerText===cells[4].innerText && cells[4].innerText===cells[5].innerText){
        isgameOver=true;
    }
    if(cells[6].innerText!=='' && cells[6].innerText===cells[7].innerText && cells[7].innerText===cells[8].innerText){
        isgameOver=true;
    }
    if(cells[0].innerText!=='' && cells[0].innerText===cells[3].innerText && cells[3].innerText===cells[6].innerText){
        isgameOver=true;
    }
    if(cells[1].innerText!=='' && cells[1].innerText===cells[4].innerText && cells[4].innerText===cells[7].innerText){
        isgameOver=true;
    }
    if(cells[2].innerText!=='' && cells[2].innerText===cells[5].innerText && cells[5].innerText===cells[8].innerText){
        isgameOver=true;
    }
    if(cells[0].innerText!=='' && cells[0].innerText===cells[4].innerText && cells[4].innerText===cells[8].innerText){
        isgameOver=true;
    }
    if(cells[2].innerText!=='' && cells[2].innerText===cells[4].innerText && cells[4].innerText===cells[6].innerText){
        isgameOver=true;
    }
    return isgameOver;
}



function resetGame(){
    Array.from(cells).forEach(element => {
        element.innerText = '';
    })
    turn = 'X';
    count=0;
    isgameOver = false;
    result.style.display='none';

}


