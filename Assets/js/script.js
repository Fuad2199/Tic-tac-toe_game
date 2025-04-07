let cells = document.querySelectorAll('.game__cell');
let turnO = true;
let resetGame = document.querySelector('#reset__game')

// ================== boxes clicable function starts ==================
cells.forEach((game__cell) => {
    game__cell.addEventListener('click', function() {
            if (turnO) {
                game__cell.innerText = 'O'  
                turnO = false;
            } else {
                game__cell.innerText = 'X'
                turnO = true;
            }
            console.log("function clicked")
            game__cell.disabled = true;
    })
})
// ================== boxes clicable function ends ==================

// ================== game reset function starts ==================
resetGame.addEventListener('click', function() {
    cells.forEach((game__cell) => {
        game__cell.innerText = '';
        game__cell.disabled = false;
    })
    turnO = true;
})
// ================== game reset function ends ==================