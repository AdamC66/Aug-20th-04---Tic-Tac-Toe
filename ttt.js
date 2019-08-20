
function someoneWon(winner){
    let table = document.querySelector('table')
    table.style.display='none'
    let header = document.querySelector('h1')
    header.innerText = (`${winner} Wins! Refresh to play again!`)
}

var checkforwinner = function(boxClicked){
    console.log(typeof(boxClicked))
    let boxes = document.querySelectorAll('td');
    let winscenarios = [[1,2,3], [4,5,6], [7,8,9],[1,4,7], [2,5,8], [3,6,9], [1,5,9], [3,5,7]];
    let checkWin = winscenarios.filter(wins => wins.includes(boxClicked));
    console.log('check for winner was called')
    checkWin.forEach((winScenario)=> {
        console.log('win scenario')
        console.log(winScenario)
        if(boxes[winScenario[0]-1].innerText === boxes[winScenario[1]-1].innerText && boxes[winScenario[1]-1].innerText == boxes[winScenario[2]-1].innerText ){
            boxes[1].style.backgroundColor='red'
            someoneWon(boxes[winScenario[0]-1].innerText);
        }else{
            console.log('no winner...yet') 
        }
    });
}

document.addEventListener("DOMContentLoaded", function() {

    board = document.querySelector('table')
    let turn = 0;
    let boxClicked = null
    document.addEventListener('click', function(e){

        boxClicked = parseInt(e.target.classList.value,10)
        console.log(e.target.innerHTML);
        if(e.target.innerHTML!=='X' && e.target.innerHTML!=='O'){
            if(turn === 0){
                e.target.innerHTML="X";
                turn = 1;
            }else{
                e.target.innerHTML='O';
                turn=0;
            }
            console.log(checkforwinner(boxClicked));
        }

    })

})