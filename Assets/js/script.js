let cells = document.querySelectorAll('.cell');
let turnO = true;
let resetGame = document.querySelector('#reset__game')
let msgContainer = document.querySelector('.message__container')
let winMsg = document.querySelector('#message__winner')

// ================== winPattern starts ==================
const winPattern = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6],
]
// ================== winPattern ends ====================

// ================== cells clicable function starts ==================
cells.forEach((cell) => {
    cell.addEventListener('click', function() {
            if (turnO) {
                cell.innerText = 'O'  
                turnO = false;
            } else {
                cell.innerText = 'X'
                turnO = true;
            }
            cell.disabled = true;
            checkWinner()
    })
})
// ================== cells clicable function ends ==================

// ================== check winner function starts ==================
const checkWinner = () => {
    for (let pattern of winPattern) {
        let cell1 = cells[pattern[0]].innerText;
        let cell2 = cells[pattern[1]].innerText;
        let cell3 = cells[pattern[2]].innerText;

        if (cell1 !== "" && cell1 === cell2 && cell2 === cell3) {
            showWinner(cell1);
            return;
        }
    }

    if ([...cells].every(cell => cell.innerText !== "")) {
        winMsg.innerText = "Match Drawn";
        msgContainer.classList.remove("hide");
    }
};
// ================== check winner function ends ==================

// ================== show winner function starts ==================
 const showWinner = (winner) => {
    winMsg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove('newgame__btn--hide');
    cells.forEach(cell => cell.disabled = true);
 };
// ================== show winner function ends ==================

// ================== game reset function starts ==================
resetGame.addEventListener('click', function() {
    cells.forEach((cell) => {
        cell.innerText = '';
        cell.disabled = false;
    })
    msgContainer.classList.add('newgame__btn--hide')
    turnO = true;
})
// ================== game reset function ends ==================